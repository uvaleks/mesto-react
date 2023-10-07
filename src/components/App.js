import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Footer from './Footer';
import api from '../utils/api';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';


function App() {
    const [currentUser, setCurrentUser] = useState({name: 'Имя', about: 'Описание', avatar: '#'});

    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            const userInfo = await api.getUserInfo();
            setCurrentUser(userInfo);
          } catch (error) {
            console.log("Error fetching user data:", error);
          }
        };
    
        fetchUserInfo();
    }, []);

    const [cards, setCards] = useState([]);

    useEffect(() => {
      const fetchCards = async () => {
        try {
          const response = await api.getCards();
          setCards(response);
        } catch (error) {
          console.log("Error fetching cards:", error);
        }
      };
  
      fetchCards();
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then((res) => {
            if (res.message === 'Пост удалён') {
                const newCards = cards.filter(function (item) {
                    return item._id !== card._id;
                  })
                setCards(newCards);
            }
        });
    }

    function handleUpdateUser({name, about}) {
        api.patchUserInfo({name, about}).then((res) => {
            setCurrentUser({name: res.name, about: res.about, avatar: res.avatar});
            closeAllPopups();
        })
    }

    function handleUpdateAvatar(link) {
        api.patchAvatar(link).then((res) => {
            setCurrentUser({name: res.name, about: res.about, avatar: res.avatar});
            closeAllPopups();
        })
    }

    function handleAddPlaceSubmit(name, link) {
        api.postCard({name, link}).then((newCard) => {
            setCards([newCard, ...cards]); 
            closeAllPopups();
        })
    }

    const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceOpne] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState('');
 
    function closeAllPopups() {
        setEditProfileOpen(false)
        setAddPlaceOpne(false)
        setEditAvatarOpen(false)
        setSelectedCard('')
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>
                <div className="page">
                    <Header />
                    <Main
                        onEditProfile={() => setEditProfileOpen(true)}
                        onAddPlace={() => setAddPlaceOpne(true)}
                        onEditAvatar={() => setEditAvatarOpen(true)}
                        closeAllPopups={closeAllPopups}
                        cards={cards}
                        selectedCard={selectedCard}
                        onCardClick={handleCardClick}
                        onCardLike={handleCardLike}
                        onCardDelete={handleCardDelete}
                    />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddCard={handleAddPlaceSubmit}
                    />
                    <Footer />
                </div>
            </CardsContext.Provider>
        </CurrentUserContext.Provider>
  );
}

export default App;

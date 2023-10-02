import '../../src/index.css';
import Header from './Header';
import Main from './Main';
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
                        isEditProfilePopupOpen={isEditProfilePopupOpen}
                        isAddPlacePopupOpen={isAddPlacePopupOpen}
                        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
                        onEditProfile={() => setEditProfileOpen(true)}
                        onAddPlace={() => setAddPlaceOpne(true)}
                        onEditAvatar={() => setEditAvatarOpen(true)}
                        closeAllPopups={closeAllPopups}
                        card={selectedCard}
                        onCardClick={handleCardClick}
                    />
                    <Footer />
                </div>
            </CardsContext.Provider>
        </CurrentUserContext.Provider>
  );
}

export default App;

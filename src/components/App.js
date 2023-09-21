import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
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
  );
}

export default App;

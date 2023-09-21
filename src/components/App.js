import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { useState } from 'react';

function App() {
    const [isEditProfilePopupOpen, setEditProfileOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlaceOpne] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState(null);
 
    function closeAllPopups() {
        setEditProfileOpen(false)
        setAddPlaceOpne(false)
        setEditAvatarOpen(false)
        setSelectedCard(null)
    }

    function handleCardClick(card) {
        setSelectedCard(card)
    }

    return (
    <div className="page">
        <Header/>

        <Main
            onEditProfile={() => setEditProfileOpen(true)}
            onAddPlace={() => setAddPlaceOpne(true)}
            onEditAvatar={() => setEditAvatarOpen(true)}
            onCardClick={handleCardClick}
        />

        <Footer/>

        <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            popupName={'edit'}
            title={'Редактировать профиль'}
            buttonText={'Сохранить'}
        >
            <input className="popup__input" type="text" name="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
            <span className="name-error popup__input-error"></span>
            <input className="popup__input" type="text" name="about" placeholder="Занятие" autoComplete="off" minLength="2" maxLength="200" required/>
            <span className="about-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            popupName={'add'}
            title={'Новое место'}
            buttonText={'Создать'}
        >
            <input className="popup__input" type="text" name="input-place" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
            <span className="input-place-error popup__input-error"></span>
            <input className="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
            <span className="input-link-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            popupName={'edit-avatar'}
            title={'Обновить аватар'}
            buttonText={'Сохранить'}
        >
            <input className="popup__input" type="url" name="input-avatar-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
            <span className="input-avatar-link-error popup__input-error"></span>
        </PopupWithForm>

        <PopupWithForm
            onClose={closeAllPopups}
            popupName={'confirm-delete'}
            title={'Вы уверены?'}
            buttonText={'Да'}
        />

        <ImagePopup
            card={selectedCard}
            onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;

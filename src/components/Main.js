import '../../src/index.css';
import Card from './Card';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';

function Main({
    isAddPlacePopupOpen,
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    closeAllPopups,
    card,
    onCardClick,
    onCardLike,
    onCardDelete
  }) {
  
  const currentUser = React.useContext(CurrentUserContext);
  const cards = React.useContext(CardsContext);

  return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar-wrapper">
            <img className="profile__avatar" src={currentUser.avatar} alt="Аватар"/>
            <div className="profile__avatar-edit-button" onClick={onEditAvatar}></div>
            </div>
            <div className="profile__profile-info">
                <div className="profile__name-wrapper">
                    <h1 className="profile__profile-name" id="profile-name">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
                </div>
                <p className="profile__profile-description" id="profile-description">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" onClick={onAddPlace}></button>
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              likes={card.likes}
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              currentUser={currentUser}
            />
          ))}
        </section>

    <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} popupName={'add'} title={'Новое место'} buttonText={'Создать'}>
      <input className="popup__input" type="text" name="input-place" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
      <span className="input-place-error popup__input-error"></span>
      <input className="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
      <span className="input-link-error popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm onClose={closeAllPopups} popupName={'confirm-delete'} title={'Вы уверены?'} buttonText={'Да'}/>

    <ImagePopup card={card} onClose={closeAllPopups}/>

    </main>
  );
}

export default Main;





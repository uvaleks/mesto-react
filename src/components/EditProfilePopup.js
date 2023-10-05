import '../../src/index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]); 

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateUser({
      name,
      about: description,
    });
  } 

  return (
    <div className={`popup popup_type_edit ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
              <form onSubmit={handleSubmit} className="popup__form popup__edit-form" name="edit-form" noValidate>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <input onChange={handleNameChange} value={name}  className="popup__input" type="text" name="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
                  <span className="name-error popup__input-error"></span>
                  <input onChange={handleDescriptionChange} value={description} className="popup__input" type="text" name="about" placeholder="Занятие" autoComplete="off" minLength="2" maxLength="200" required/>
                  <span className="about-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
          </div>
    </div>
  );
}

export default EditProfilePopup;





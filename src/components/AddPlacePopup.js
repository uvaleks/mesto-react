import '../../src/index.css';
import React from 'react';

function AddPlacePopup({ isOpen, onClose, onAddCard }) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onAddCard(nameRef.current.value, linkRef.current.value);
    nameRef.current.value = null;
    linkRef.current.value = null;
  } 

  return (
    <div className={`popup popup_type_add ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
              <form onSubmit={handleSubmit} className="popup__form popup__add" name="add-form" noValidate>
                  <h2 className="popup__title">Новое место</h2>
                  <input ref={nameRef} className="popup__input" type="text" name="input-place" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
                  <span className="input-place-error popup__input-error"></span>
                  <input ref={linkRef} className="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
                  <span className="input-link-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Создать</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
          </div>
    </div>
  );
}

export default AddPlacePopup;





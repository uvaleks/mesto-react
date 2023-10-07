import '../../src/index.css';
import React from 'react';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
  
    onUpdateAvatar(avatarRef.current.value);
    avatarRef.current.value = null;
  } 

  return (
    <div className={`popup popup_type_edit-avatar ${isOpen && 'popup_opened'}`}>
          <div className="popup__container">
              <form onSubmit={handleSubmit} className="popup__form popup__edit-avatar" name="edit-avatar" noValidate>
                  <h2 className="popup__title">Обновить аватар</h2>
                  <input ref={avatarRef} className="popup__input" type="url" name="input-avatar-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
                  <span className="input-avatar-link-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть" onClick={onClose}></button>
          </div>
    </div>
  );
}

export default EditAvatarPopup;





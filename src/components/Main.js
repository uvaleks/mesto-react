import '../../src/index.css';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function Main({ isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, handleEditProfileClick, handleAddPlaceClick, handleEditAvatarClick }) {
  return (
    <main className="content">
        <section className="profile">
            <div className="profile__avatar-wrapper">
            <img className="profile__avatar" src="//:0" alt="Аватар"/>
            <div className="profile__avatar-edit-button" onClick={handleEditAvatarClick}></div>
            </div>
            <div className="profile__profile-info">
                <div className="profile__name-wrapper">
                    <h1 className="profile__profile-name" id="profile-name"></h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={handleEditProfileClick}></button>
                </div>
                <p className="profile__profile-description" id="profile-description"></p>
            </div>
            <button className="profile__add-button" type="button" aria-label="Добавить" onClick={handleAddPlaceClick}></button>
        </section>
        <section className="elements">
        </section>

    <PopupWithForm isOpen={isEditProfilePopupOpen} popupName={'edit'} title={'Редактировать профиль'} buttonText={'Сохранить'}>
      <input className="popup__input" type="text" name="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
      <span className="name-error popup__input-error"></span>
      <input className="popup__input" type="text" name="about" placeholder="Занятие" autoComplete="off" minLength="2" maxLength="200" required/>
      <span className="about-error popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm isOpen={isAddPlacePopupOpen} popupName={'add'} title={'Новое место'} buttonText={'Создать'}>
      <input className="popup__input" type="text" name="input-place" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
      <span className="input-place-error popup__input-error"></span>
      <input className="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
      <span className="input-link-error popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm isOpen={isEditAvatarPopupOpen} popupName={'edit-avatar'} title={'Обновить аватар'} buttonText={'Сохранить'}>
      <input className="popup__input" type="url" name="input-avatar-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
      <span className="input-avatar-link-error popup__input-error"></span>
    </PopupWithForm>

    <PopupWithForm popupName={'confirm-delete'} title={'Вы уверены?'} buttonText={'Да'}/>

    <ImagePopup/>

    </main>
  );
}

export default Main;





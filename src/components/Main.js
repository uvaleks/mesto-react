import '../../src/index.css';

function Main() {
  

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

        <div className="popup popup_type_edit">
          <div className="popup__container">
              <form className="popup__form popup__edit-form" name="edit-form" noValidate>
                  <h2 className="popup__title">Редактировать профиль</h2>
                  <input className="popup__input" type="text" name="name" placeholder="Имя" autoComplete="off" minLength="2" maxLength="40" required/>
                  <span className="name-error popup__input-error"></span>
                  <input className="popup__input" type="text" name="about" placeholder="Занятие" autoComplete="off" minLength="2" maxLength="200" required/>
                  <span className="about-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div className="popup popup_type_add">
          <div className="popup__container">
              <form className="popup__form popup__add-form" name="add-form" noValidate>
                  <h2 className="popup__title">Новое место</h2>
                  <input className="popup__input" type="text" name="input-place" placeholder="Название" autoComplete="off" minLength="2" maxLength="30" required/>
                  <span className="input-place-error popup__input-error"></span>
                  <input className="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
                  <span className="input-link-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Создать</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div className="popup popup_type_photo">
          <div className="popup__photo-wrapper">
              <img className="popup__photo" src="//:0"/>
              <h2 className="popup__photo-title"></h2>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div className="popup popup_type_edit-avatar">
          <div className="popup__container">
              <form className="popup__form popup__edit-avatar-form" name="edit-avatar-form" noValidate>
                  <h2 className="popup__title">Обновить аватар</h2>
                  <input className="popup__input" type="url" name="input-avatar-link" placeholder="Ссылка на картинку" autoComplete="off" required/>
                  <span className="input-avatar-link-error popup__input-error"></span>
                  <button className="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div className="popup popup_type_confirm-delete">
          <div className="popup__container">
              <form className="popup__form popup__confirm-delete" name="confirm-delete" noValidate>
                  <h2 className="popup__title">Вы уверены?</h2>
                  <button className="popup__submit-button" type="submit">Да</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>
    </main>
  );
}

function handleEditAvatarClick() {
  document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
}

function handleEditProfileClick() {
  document.querySelector('.popup_type_edit').classList.add('popup_opened');
}

function handleAddPlaceClick() {
  document.querySelector('.popup_type_add').classList.add('popup_opened');
}

export default Main;





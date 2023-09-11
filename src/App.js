import logo from './logo.svg';
import './index.css';

function App() {
  return (
      <body class="page">
      <header class="header">
          <img class="header__logo" src="<%=require('./images/logo.svg')%>" alt="Логотип Место"/>
      </header>
      <main class="content">
          <section class="profile">
              <div class="profile__avatar-wrapper">
              <img class="profile__avatar" src="//:0" alt="Аватар"/>
              <div class="profile__avatar-edit-button"></div>
              </div>
              <div class="profile__profile-info">
                  <div class="profile__name-wrapper">
                      <h1 class="profile__profile-name" id="profile-name"></h1>
                      <button class="profile__edit-button" type="button" aria-label="Редактировать"></button>
                  </div>
                  <p class="profile__profile-description" id="profile-description"></p>
              </div>
              <button class="profile__add-button" type="button" aria-label="Добавить"></button>
          </section>
          <section class="elements">
          </section>
      </main>
      <footer class="footer">
          <p class="footer__copyright">© 2023 Mesto Russia</p>
      </footer>

      <div class="popup popup_type_edit">
          <div class="popup__container">
              <form class="popup__form popup__edit-form" name="edit-form" novalidate>
                  <h2 class="popup__title">Редактировать профиль</h2>
                  <input class="popup__input" type="text" name="name" autocomplete="off" minlength="2" maxlength="40" required/>
                  <span class="name-error popup__input-error"></span>
                  <input class="popup__input" type="text" name="about" autocomplete="off" minlength="2" maxlength="200" required/>
                  <span class="about-error popup__input-error"></span>
                  <button class="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div class="popup popup_type_add">
          <div class="popup__container">
              <form class="popup__form popup__add-form" name="add-form" novalidate>
                  <h2 class="popup__title">Новое место</h2>
                  <input class="popup__input" type="text" name="input-place" placeholder="Название" autocomplete="off" minlength="2" maxlength="30" required/>
                  <span class="input-place-error popup__input-error"></span>
                  <input class="popup__input" type="url" name="input-link" placeholder="Ссылка на картинку" autocomplete="off" required/>
                  <span class="input-link-error popup__input-error"></span>
                  <button class="popup__submit-button" type="submit">Создать</button>
              </form>
              <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div class="popup popup_type_photo">
          <div class="popup__photo-wrapper">
              <img class="popup__photo" src="//:0"/>
              <h2 class="popup__photo-title"></h2>
              <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div class="popup popup_type_edit-avatar">
          <div class="popup__container">
              <form class="popup__form popup__edit-avatar-form" name="edit-avatar-form" novalidate>
                  <h2 class="popup__title">Обновить аватар</h2>
                  <input class="popup__input" type="url" name="input-avatar-link" placeholder="Ссылка на картинку" autocomplete="off" required/>
                  <span class="input-avatar-link-error popup__input-error"></span>
                  <button class="popup__submit-button" type="submit">Сохранить</button>
              </form>
              <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <div class="popup popup_type_confirm-delete">
          <div class="popup__container">
              <form class="popup__form popup__confirm-delete" name="confirm-delete" novalidate>
                  <h2 class="popup__title">Вы уверены?</h2>
                  <button class="popup__submit-button" type="submit">Да</button>
              </form>
              <button class="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
      </div>

      <template class="card-template">
          <article class="card">
              <img class="card__photo" src="//:0"/>
              <div class="card__bar">
                  <h2 class="card__title"></h2>
                  <div class="card__like-wrapper">
                  <button class="card__like-button" type="button" aria-label="Нравится"></button>
                  <p class="card__like-counter"></p>
                  </div>
              </div>
          </article>
      </template>

      <template class="own-card-template">
          <article class="card">
              <img class="card__photo" src="//:0"/>
              <div class="card__delete-button-wrapper">
                  <button class="card__delete-button" type="button" aria-label="Удалить"></button>
              </div>
              <div class="card__bar">
                  <h2 class="card__title"></h2>
                  <div class="card__like-wrapper">
                  <button class="card__like-button" type="button" aria-label="Нравится"></button>
                  <p class="card__like-counter"></p>
                  </div>
              </div>
          </article>
      </template>
    </body>
  );
}

export default App;

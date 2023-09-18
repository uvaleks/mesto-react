import '../../src/index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
    const [isEditProfilePopupOpen, onEditProfile] = useState(false);
    const [isAddPlacePopupOpen, onAddPlace] = useState(false);
    const [isEditAvatarPopupOpen, onEditAvatar] = useState(false);

    return (
      <div className="page">
        <Header />
        <Main
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            handleEditProfileClick={() => onEditProfile(true)}
            handleAddPlaceClick={() => onAddPlace(true)}
            handleEditAvatarClick={() => onEditAvatar(true)}
        />
        <Footer />

      <template className="card-template">
          <article className="card">
              <img className="card__photo" src="//:0"/>
              <div className="card__bar">
                  <h2 className="card__title"></h2>
                  <div className="card__like-wrapper">
                  <button className="card__like-button" type="button" aria-label="Нравится"></button>
                  <p className="card__like-counter"></p>
                  </div>
              </div>
          </article>
      </template>

      <template className="own-card-template">
          <article className="card">
              <img className="card__photo" src="//:0"/>
              <div className="card__delete-button-wrapper">
                  <button className="card__delete-button" type="button" aria-label="Удалить"></button>
              </div>
              <div className="card__bar">
                  <h2 className="card__title"></h2>
                  <div className="card__like-wrapper">
                  <button className="card__like-button" type="button" aria-label="Нравится"></button>
                  <p className="card__like-counter"></p>
                  </div>
              </div>
          </article>
      </template>
    </div>
  );
}

export default App;

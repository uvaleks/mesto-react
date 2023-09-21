import '../../src/index.css';
import Card from './Card';
import api from '../utils/api';
import { useState, useEffect } from 'react';

function Main({
    onEditAvatar,
    onEditProfile,
    onAddPlace,
    onCardClick
  }) {
  
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await api.getUserInfo();
        setUserName(response.name);
        setUserDescription(response.about);
        setUserAvatar(response.avatar);
      } catch (error) {
        console.log("Error fetching user data:", error);
      }
    };

    fetchUserInfo();
  }, []);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await api.getCards();
        setCards(response);
      } catch (error) {
        console.log("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <main className="content">
      <section className="profile">
          <div className="profile__avatar-wrapper">
          <img className="profile__avatar" src={userAvatar} alt="Аватар"/>
          <div className="profile__avatar-edit-button" onClick={onEditAvatar}></div>
          </div>
          <div className="profile__profile-info">
              <div className="profile__name-wrapper">
                  <h1 className="profile__profile-name" id="profile-name">{userName}</h1>
                  <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={onEditProfile}></button>
              </div>
              <p className="profile__profile-description" id="profile-description">{userDescription}</p>
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
          />
        ))}
      </section>
    </main>
  );
}

export default Main;





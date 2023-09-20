import '../../src/index.css';

function Card({ name, link, likes }) {
  return (
    <article class="card">
        <img class="card__photo" src={link}/>
        <div class="card__bar">
            <h2 class="card__title">{name}</h2>
            <div class="card__like-wrapper">
            <button class="card__like-button" type="button" aria-label="Нравится"></button>
            <p class="card__like-counter">{likes.length}</p>
            </div>
        </div>
    </article>
  );
}

export default Card;
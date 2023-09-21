import '../../src/index.css';

function Card({ name, link, likes, card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

  return (
    <article className="card" onClick={handleClick}>
        <img className="card__photo" src={link}/>
        <div className="card__bar">
            <h2 className="card__title">{name}</h2>
            <div className="card__like-wrapper">
            <button className="card__like-button" type="button" aria-label="Нравится"></button>
            <p className="card__like-counter">{likes.length}</p>
            </div>
        </div>
    </article>
  );
}

export default Card;
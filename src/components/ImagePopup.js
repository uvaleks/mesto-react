import '../../src/index.css';

function ImagePopup() {
  return (
    <div className="popup popup_type_photo">
          <div className="popup__photo-wrapper">
              <img className="popup__photo" src="//:0"/>
              <h2 className="popup__photo-title"></h2>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
    </div>
  );
}

export default ImagePopup;





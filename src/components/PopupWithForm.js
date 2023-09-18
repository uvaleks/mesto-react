import '../../src/index.css';

function PopupWithForm({ popupName, title, buttonText, children, isOpen }) {
  return (
    <div className={`popup popup_type_${popupName} ${isOpen ? 'popup_opened' : ''}`}>
          <div className="popup__container">
              <form className={`popup__form popup__${popupName}-form`} name={`${popupName}-form`} noValidate>
                  <h2 className="popup__title">{title}</h2>
                    {children}
                  <button className="popup__submit-button" type="submit">{buttonText}</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
    </div>
  );
}

export default PopupWithForm;





import '../../src/index.css';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name}`}>
          <div className="popup__container">
              <form className={`popup__form popup__${props.name}-form`} name={`${props.name}-form`} noValidate>
                  <h2 className="popup__title">{props.title}</h2>
                    {props.children}
                  <button className="popup__submit-button" type="submit">{props.buttonText}</button>
              </form>
              <button className="popup__close-button" type="button" aria-label="Закрыть"></button>
          </div>
    </div>
  );
}

export default PopupWithForm;





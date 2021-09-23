import React from "react";
import "./Popup.css";
import closePopupImagePath from "../../images/close__icon.svg";
function Popup(props) {
  return (
    <div className={`popup ${props.isOpen && "popup_opened"}`}>
      <form className="popup__form popup__cantainer">
        <button
          className="popup__close-button"
          onClick={props.closePopup}
          type="reset"
        >
          <img
            className="popup__close-button-image"
            src={closePopupImagePath}
            alt="Закрыть"
          />
        </button>
        <div className="popup__container">
          <h3 className="popup__title">Добавить пост</h3>
          <label className="popup__lable">
            <input
              id="post-title"
              className="popup__input popup__input_place"
              type="text"
              name="name"
              minLength="1"
              maxLength="30"
              placeholder="Название"
              autoComplete="off"
              required
            />
          </label>
          <label className="popup__lable">
            <input
              id="post-text"
              className="popup__input popup__input_image-url"
              type="text"
              name="textarea"
              placeholder="Введите текст"
              autoComplete="off"
              required
            />
          </label>
          <button className="popup__submit-button" type="submit">
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
}

export default Popup;

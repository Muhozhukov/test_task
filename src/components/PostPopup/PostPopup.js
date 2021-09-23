import React from 'react';
import './PostPopup.css'
import closePopupImagePath from '../../images/close__icon.svg';
function PostPopup(props) {
  return(
    <div className={`post-popup ${props.isOpen && 'post-popup_opened'}`}>
      <div className='post-popup__container'>
        <button  className="popup__close-button" onClick={props.closePopup} type="reset">
            <img className="popup__close-button-image" src={closePopupImagePath} alt="Закрыть" />
        </button>
        <h2 className='post-popup__title'>{props.selectedPost.title}</h2>
        <p className='post-popup__text'>{props.selectedPost.body}</p>
      </div>
    </div>
  )
}


export default PostPopup;

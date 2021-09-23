import React from 'react';
import './Post.css'
function Post(props) {
  function handleClick() {
    props.onPostClick(props.post);
  }
  return (
    <div onClick={handleClick} className='post'>
        <h2 className="post__name">{props.title}</h2>
        <p className='post__text'>{props.text}</p>
    </div>
  )
}

export default Post

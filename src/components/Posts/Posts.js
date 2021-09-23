import React from "react";
import "./Posts.css";
import Post from "../Post/Post";
function Posts(props) {
  const [index, setIndex] = React.useState(6);
  const postsList = props.posts.map((post, i) => {
    while (i < index) {
      return (
        <Post
          post={post}
          key={post.id}
          title={post.title}
          text={post.body}
          onPostClick={(data) => props.onPostClick(data)}
        />
      );
    }
  });
  function downloadPosts() {
    setIndex(index + 4);
  }

  return (
    <section className="posts">
      <button className="posts__button-new" onClick={props.openPopup}>
        Создать новый пост
      </button>
      <h2 className="posts__title">Последние посты</h2>
      <div className="posts__grid-container">{postsList}</div>
      <button className="posts__button-more" onClick={() => downloadPosts()}>
        Ещё
      </button>
    </section>
  );
}

export default Posts;

import './App.css';
import React from 'react';
import Posts from '../Posts/Posts';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import api from '../Api/Api';
import Popup from '../Popup/Popup';
import PostPopup from '../PostPopup/PostPopup';
function App() {
  const [isPopupOpened, setIsPopupOpened] = React.useState(false);
  const [isPostPopupOpened, setIsPostPopupOpened] = React.useState(false);
  const [posts, setPosts] = React.useState([]);
  const [selectedPost, setSelectedPost] = React.useState({});
  function openPopup() {
    setIsPopupOpened(true);
  }
  function closeAllPopup() {
    setIsPopupOpened(false);
    setIsPostPopupOpened(false);
  }
  function handlePostClick(data) {
    setSelectedPost(data);
    // console.log(data)
    setIsPostPopupOpened(true);
  }
  React.useEffect(() => {
    api.getPosts()
      .then((res) => setPosts(res))
      .catch((err) => console.log(err))
  }, [])
  return (
    <div className='App'>
    <Header></Header>
    <Posts
      openPopup={openPopup}
      onPostClick={(data) => handlePostClick(data)}
      posts={posts}></Posts>


    <Footer></Footer>
    <Popup
      closePopup={closeAllPopup}
      isOpen={isPopupOpened}>

    </Popup>
    <PostPopup
      selectedPost={selectedPost}
      closePopup={closeAllPopup}
      isOpen={isPostPopupOpened}></PostPopup>
    </div>
  );
}

export default App;


import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from '../action';
import  './Detail.css';
import { Link } from 'react-router-dom';
import Info from './Info';

const Detail = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showFullContent, setShowFullContent] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.data);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handlePostClick = (post)=>{
    setSelectedPost(post);
  }

  return (
    <div>
    <h1 >Social Media App</h1>
     <hr/>
    <div className='container'>
     
      {posts.map((post) => (
        
        <div key={post.id} className='post'>
          <img src='https://picsum.photos/200?random=${post.id}'/>
          <p>User Id: {post.userId}</p> 
          <br/>
          <p>
            Title :{post.title.slice(0,100)}{'...'}
          </p>
          <p>
             Body : {post.body.slice(0, 10)}
             <Link
              to={{ pathname: `/info/${post.id}`, state: { post: selectedPost } }}
              onClick={() => handlePostClick(post)}
            >
              Read More
            </Link>
            {'...'}
            </p>
        </div>
      
      ))}

</div>
    </div>
    
  )
}

export default Detail;
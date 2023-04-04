import React ,{useState , useEffect} from 'react';
import Detail from './Detail';
import "./Detail.css";
import { useParams } from 'react-router-dom';
 const Info = ({location}) =>{
  const { id } = useParams();
  const [post, setPost] = useState(null);

  
  useEffect(() => {
   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
     .then(response => response.json())
     .then(data => setPost(data));
 }, [id]);

 if (!post) {
   return <div>No post found</div>;
 }
 
  return (
    <div >
     <h1>Social Media App</h1>
     <hr/>
       <h4>Details Page For Post With ID {id}</h4>
       <div className='post' >
       <img src='https://picsum.photos/200?random=${post.id}'/>
       <p>User Id: {post.userId}</p>
       <p>Title:{post.title}</p>
       <p>Body: {post.body}</p>
       </div>
    </div>
  )
}

export default Info;







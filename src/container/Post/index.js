import React,{useState,useEffect} from 'react'
import './style.css'
import BlogPost from '../../components/blogPost'
import Sidebar from '../../components/sidebar'
import data from "../../Data/Data.json"
import {NavLink} from 'react-router-dom';
import Card from '../../components/Ui/Card'
/**
* @author
* @function Post

**/

const Post
 = (props) => {
   console.log(props)

   const [posts,setPosts] = useState([]);

   useEffect(()=>{
       const posts = data.data;
       setPosts(posts);
   },[posts]);

  return(
    
    <section class='container'>
        <BlogPost {...props}>
        
        </BlogPost>
        <Sidebar>
        
        </Sidebar>
                

    </section>
    
    


   );

 }

export default Post

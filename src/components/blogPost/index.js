import React,{useState,useEffect} from 'react'
import Card from '../Ui/Card'
import unity from '../../blogPost_images/unity.jpg'
import './style.css'
import data from "../../Data/Data.json"
// import Post from '../../container/Post'
/**
* @author
* @function BlogPost

**/

const BlogPost
 = (props) => {
    console.log(props);
    const [post, setPost] = useState({           
    });

    const [postid,setPostid] = useState('');

    useEffect (() =>{
        const postid = props.match.params.postid;
        const post = data.data.find(post => post.id == postid);
        console.log(post);
        setPost(post);
        setPostid(postid);
    },[post,props.match.params.postid]);

    if(post.blogImage =="") return null;

  return(
    <div className = 'blogPost'>
        <Card>
            <div className="headerBlog">
                <span className="blogCategory">{post.blogCategory}</span>
                <h1 className="title">{post.blogTitle}</h1>
                <span className="postedBy">Posted on {post.postedOn} by {post.author}</span>                
            </div>

            <div className = "imageContainer">
                <img src={process.env.PUBLIC_URL + '/blogPost_images/' + post.blogImage} alt="Post Image"></img>
            </div>

            <div className="content">
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText}</p>
            </div>
        </Card>

    </div>
   )

 }

export default BlogPost

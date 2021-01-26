import React,{useState,useEffect} from 'react'
import Card from '../Ui/Card'
import divyansh from '../../SideBar Image/Divyansh.jpg'
import './style.css'
import data from "../../Data/Data.json"
import {NavLink} from 'react-router-dom';
import SocialMedia from '../socialmedia'


/**
* @author
* @function Sidebar

**/

const Sidebar
 = (props) => {

    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        const posts = data.data;
        setPosts(posts);
    },[posts]);

  return(
    <div class="containerSide" style={{width:props.width}}>
        
        <Card style={{marginBottom : '20px' , padding: '20px' , boxSizing : 'border-box'}}>
            <div class="headerSidebar">
                <span>About Me</span>
            </div>
            <div class="image">
                <img src={divyansh}></img>
            </div>  

            <div class="body"></div>
            <div class="bio"> I am the one and only hero.</div>
        </Card>

        <Card style={{marginBottom : '20px' , padding: '20px' , boxSizing : 'border-box'}}>
            <div class="headerSidebar">
                <span>Social Networks</span>
                <SocialMedia></SocialMedia>
            </div>
            </Card>

            <Card style={{marginBottom : '20px' , padding: '20px' , boxSizing : 'border-box'}}>
            <div class="headerSidebar">
                <span>Recent Post</span>
                
            </div>
            <div className="posts">
                {
                    posts.map(post =>{
                        return(
                            <NavLink key={post.id} to = {`/post/${post.id}`}>
                                <div className="recentPost">
                                <h3>{post.blogTitle}</h3>
                                <span>{post.postedOn}</span>
                                </div>
                            </NavLink>
                        )
                    })
                }
            </div>
            </Card>

    </div>
   )

 }

export default Sidebar

import React, {useState} from 'react'
import './style.css'
import searchLogo from '../../Assets/Icons/search.jpeg'
import {NavLink}  from 'react-router-dom'

/**
* @author
* @function NavBar

**/



const Navbar = (props) => {


    const [search,setSearch] =  useState(false);
    
    const submitSearch =(e)=>{
      e.preventDefault();
      alert('Searched');
    }
    
    let count=0 ;

    const openSearch = ()=>{
        
        setSearch(false);
              
        
      
    }
    console.log(count);
    
    
    const searchClass= search ? 'searchinput active' : 'searchinput';
    
      return(
        <div class="navbar">
            <ul class="navbarMenu">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/AboutUs">About Us</NavLink></li>
                <li><NavLink to="/Post/1">Posts</NavLink></li>
                <li><NavLink to="/Contact">Contact Us</NavLink></li>
             
    
            </ul>
            <div class="search">
              <form  onSubmit={submitSearch}>
              <input type="text" class={searchClass} placeholder="Seacrh"></input >
                <img onClick ={openSearch} className="searchicon" src={searchLogo} alt="search"></img>
              </form>
       
            </div>
        </div>
       )
    
     }
    
    export default Navbar
import React from 'react';
import './App.css';
import Home from './container/home';
import Header from './components/header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route}  from 'react-router-dom'
import AboutUs from './container/about_us';
import Post from './container/Post';
import Footer from './components/footer';

function App() {
  return (

    <Router>
    <div className="App">
      <Header></Header>  
      <Hero></Hero>
      <Route path="/Post/:postid"  component = {Post}></Route>
      <Route path="/" exact component = {Home}></Route>
      <Route path="/AboutUs"  component = {AboutUs}></Route>      
    </div>
    <Footer></Footer>
    </Router>
    
  );
}

export default App;

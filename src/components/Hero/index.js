import React from 'react'
import './style.css'
import Card from '../Ui/Card'
import Logo from '../Logo'
import NavBar from '../nav-bar'
/**
* @author
* @function Hero

**/

const Hero
 = (props) => {
  return(
    <div>
        <Card> 
            <div style={{padding: '50px'}}>
            <Logo></Logo>
            </div> 
        <NavBar>
          
        </NavBar>
        </Card>
        
    </div>
   )

 }

export default Hero

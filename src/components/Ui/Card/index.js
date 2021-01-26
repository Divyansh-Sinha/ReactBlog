import React from 'react'
import './style.css'
/**
* @author
* @function Card

**/

const Card
 = (props) => {
  return(
    // passing style property here where card is being used    
    <div class = "card" style={props.style}> 
        {props.children}
    </div>
   )

 }

export default Card

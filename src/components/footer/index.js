import React from 'react'
import './style.css'
import Card from '../Ui/Card'
import {FaHome} from '../../../node_modules/react-icons/fa'
import {IoIosMail,IoIosCall} from '../../../node_modules/react-icons/io'
/**
* @author
* @function Footer

**/

const Footer
 = (props) => {
  return(
      <div className="footerContainer">
                  
            <div className="box">
                <div><IoIosCall></IoIosCall></div>
                <span>(+91) 8825340664</span>
                </div>
            <div className="box">
                <div><IoIosMail></IoIosMail></div>
               <span>divyanshsinha009@gmail.com</span> 
            </div>
            <div className="box">
                <div><FaHome></FaHome></div>                
               <span> Mango, Jamshedpur, Jharkhand </span>
            </div>
      
      </div>
   )

 }

export default Footer

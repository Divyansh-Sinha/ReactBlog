import React from 'react'
import './style.css'
import { IoLogoGithub } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";

/**
* @author
* @function SocialMedia

**/

const SocialMedia
 = (props) => {
  return(
    <div className="socialMedia">
        <a href="https://github.com/Divyansh-Sinha" target="_blank"><IoLogoGithub></IoLogoGithub></a>
        <a href="https://www.facebook.com/profile.php?id=100008293239808" target="_blank"><FaFacebookF></FaFacebookF></a>
    </div>
   )

 }

export default SocialMedia

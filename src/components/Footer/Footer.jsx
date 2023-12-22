import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="copyright">
        All right reserved by &#169; <span className='span'>Mehedi Hassan</span> 
      </div>
      <div className="center">
        | 
      </div>
      <div className="socialMedia">
        <a href="/"><FaInstagram /></a>
        <a href="/"><FaTwitter /></a>
        <a href="/"><FaFacebookF /></a>
        <a href="/"><FaLinkedin /></a>
      </div>
    </div>
  )
}

export default Footer

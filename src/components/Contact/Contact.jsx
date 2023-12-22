import React from 'react'
import "./Contact.css"
import img from "../../assets/home-banner.jpg"
const Contact = () => {
  return (
    <div className='contact'>
       <div className="picture">
        <img src={img} alt="" />
       </div>
       <div className="forms">
         <h1>Contact Us</h1>
         <form>
           <div className='inputDiv'>
            <input type="text" name='name' placeholder='Enter full name' />
           </div>
           <div className='inputDiv'> 
            <input type="text" name='name' placeholder='Enter email' />
           </div>
           <div className='inputDiv'>
            <textarea name="message" id="" cols="30" rows="5" placeholder='Message'></textarea>
           </div>
           <input type="submit" value="Send Message" />
         </form>
       </div>
    </div>
  )
}

export default Contact

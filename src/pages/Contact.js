import React from 'react'

export default function Contact() {

  const contactSubmit = () => {
    alert("Your message has been submitted!")
  }


  return (
    <div className='container2'>
      <h2>Contact Us</h2>
      <div className='contactInfo'>
      <input type='text' placeholder='Enter your name' className='inputField' required="true"/>
      <input type='email' placeholder='Enter your email' className='inputField' required="true"/>
      <textarea placeholder='Enter your message' className='inputField textInputField' required="true"></textarea>
      <button className='btn' onClick={contactSubmit}>Submit</button>
      </div>
    </div>
  )
}

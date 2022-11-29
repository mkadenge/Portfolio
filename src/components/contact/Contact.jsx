import React from 'react'
import './contact.css'
import {RiMailSendFill} from 'react-icons/ri'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_40xfc9c', 'template_adyyrt9', form.current, 'Ht5iyNhCQHG_QIo2fY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

<div className="container contact__container">

  <div className="contact__options">

    <article className='contact__option'>
      <RiMailSendFill className='contact__option-icon'/>
      <h4>Email</h4>
      <h5>markmadaga@gmail.com</h5>
      <a href="mailto:markmadaga@gmail.com" target="_blank">Sen a message</a>
    </article>

    <article className='contact__option'>
      <BsMessenger className='contact__option-icon'/>
      <h4>Messanger</h4>
      <h5>MarkMadaga</h5>
      <a href="https://m.me/marq.kadex/">Send a message</a>
    </article>


    <article className='contact__option'>
      <BsWhatsapp className='contact__option-icon'/>
      <h4>Whatsapp</h4>
      <h5>+254708723503</h5>
      <a href="https://api.whatsapp.com/send?phone+254708723503">Send a message</a>
    </article>

  </div>

{/*END OF CONTACT OPTIONS*/}
<form ref={form} onSubmit={sendEmail}>
    <input type="text" name='name' placeholder='Your Full name' required />
    <input type="email" name='email' placeholder='Your Email' required />
    <textarea name="message" rows="7" placeholder='Your message' required></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>

</form>
</div>
    </section>
  )
}

export default Contact
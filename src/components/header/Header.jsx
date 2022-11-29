import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/ff.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
   <header>


    <div className="container header__container">

        <h2> Hey There i'm</h2>
        <h1> Mark  Madaga</h1>

        <h3 className="text-light">Front End Developer</h3>
        <h4 className="text-light">"A boy has never wept…nor dashed a thousand kin"</h4>


        <CTA/>

        

       

        
    </div>
   </header>
  )
}

export default Header
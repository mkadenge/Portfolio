import React from 'react'
import './about.css'
import ME from '../../assets/ff.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>


      <div className="container about__container">
        <div className="about__me">

<div className="about__me-image">

  <img src={ME} alt="About Image" />
</div>

        </div>


<div className="about__content">

<div className="about__cards">

  

</div>
<p>
I am ambitious and driven. I thrive on challenges and constantly set goals for myself, so I have something to strive toward. I'm not comfortable with settling, and I'm always looking for an opportunity to do better and 
achieve greatness. 

</p>
<a href='#contact' className='btn btn-primary'>Let's Talk</a>

</div>
      </div>
    </section>
  )
}

export default About
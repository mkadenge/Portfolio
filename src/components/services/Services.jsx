import React from 'react'
import './services.css'
import {CgRadioChecked} from 'react-icons/cg'

const Services = () => {
  return (
    <section id='services'>

      
      <h2>Services I offer</h2>

      <div className="container services__container">

        <article className="service">

          <div className="service__head">

            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Optimizing the user experience</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Creating tools that improve site interaction 
                regardless of the browser.</p>
            </li>

            

            

          </ul>
        </article>
        {/*END OF UI/UX*/}

        <article className="service">

          <div className="service__head">

            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to
                 bring concepts to life.</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Domain Email.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Database implementation.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Website maintainance.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Design and development of websites.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Mobile responsive websites.</p>
            </li>

            

          </ul>
        </article>
        {/*END OF WEB DEV*/}

        <article className="service">

          <div className="service__head">

            <h3>Mobile App</h3>
          </div>
          <ul className='service__list'>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Ecommerce Platform.</p>
            </li>
            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Database Manitanance.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>User Interface / User Experience.</p>
            </li>

            <li> 
              <CgRadioChecked className='service__list-icon'/>
              <p>Design and Implementation.</p>
            </li>

            

            

          </ul>
        </article>
        {/*END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services
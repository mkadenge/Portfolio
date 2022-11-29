import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/roni.png'
import IMG2 from '../../assets/impe.png'
import IMG3 from '../../assets/red.png'
import IMG4 from '../../assets/svfl1.png'
import IMG5 from '../../assets/vvf.png'
import IMG6 from '../../assets/maky.png'



const data = [

{
  id:1,
  image: IMG1,
  title:'',
  github:'https://github.com',
  demo:''
},


]



const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">


        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
    </div>
          <h3>Company Website</h3>
          <h5>Built using:html,css,javascript,bootstrap</h5>
          <a href='' className='btn' target='_blank'>GitHub</a>
          
        </article>

        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
    </div>
          <h3>About us Website</h3>
          <h5>Built using:html,css,javascript,bootstrap</h5>
          <div className="portfolio__item-cta">

          <a href='' className='btn' target='_blank'>GitHub</a>
          
          </div>
        </article>

        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
    </div>
          <h3>RedHat Blood Donation APPLICATION</h3>
          <h5>Built using:Android, Java, Kotlin, FireBase, XML</h5>
          <div className="portfolio__item-cta">

          <a href='' className='btn' target='_blank'>GitHub</a>
          
          </div>
        </article>

        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
    </div>
          <h3>Insuarance Company Website</h3>
          <h5>Built using:html,css,javascript,bootstrap</h5>
          <div className="portfolio__item-cta">

          <a href='' className='btn' target='_blank'>GitHub</a>
          
          </div>
        </article>

        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
    </div>
          <h3>Industry Website</h3>
          <h5>Built using:html,css,javascript,bootstrap</h5>
          <div className="portfolio__item-cta">

          <a href='' className='btn' target='_blank'>GitHub</a>
          <a href='' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>


          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
    </div>
          <h3>React Portfolio Website</h3>
          <h5>Built using:JavaScript, JSX, CSS, SCSS, ReactDom, Router</h5>
          <div className="portfolio__item-cta">

          <a href='' className='btn' target='_blank'>GitHub</a>
          
          </div>
        </article>

        



        

       

        

        

        
      </div>

    </section>
  )
}

export default Portfolio
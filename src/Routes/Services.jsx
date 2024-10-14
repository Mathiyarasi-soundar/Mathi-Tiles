import React from 'react'
import './Styles/Services.css'
import Navbar from '../Components/Navbar/Navbar'
import image from '../Components/images/Home-images/file.png'
import Footer from '../Components/Footer/Footer'
import service1 from '../Components/images/Services-image/floor service.png'
import service2 from '../Components/images/Services-image/fitting service .png'
import service3 from '../Components/images/Services-image/tile grout service.png'
import service4 from '../Components/images/Services-image/granite fitting servicee.png'
import service5 from '../Components/images/Services-image/wall tile fitting.webp'
import service6 from '../Components/images/Services-image/marble floor polishing service.png'

function Services() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <img className='about-img' src={image} alt="img" />
        <div className="about-head">
          <h1>Services</h1>
        </div>
      </div>
      <div className="service-container">
        <div className="tiles-trendings">
          <h1>Services Provide by Us</h1>
          <div className="tiles-trending">
            <div>
              <img src={service1} alt="Floor services" />
              <h3>Floor Services</h3>
            </div>
            <div>
              <img src={service2} alt="Wooden tiles fitting services" />
              <h3>Wooden tiles fitting Services</h3>
            </div>
            <div>
              <img src={service3} alt="Tiles Grout services" />
              <h3>Tiles Grout Services</h3>
            </div>
            <div>
              <img src={service4} alt="Granite fitting services" />
              <h3>Granite fitting Services</h3>
            </div>
            <div>
              <img src={service5} alt="Bathroom fitting services" />
              <h3>Bathroom fitting Services</h3>
            </div>
            <div>
              <img src={service6} alt="Marble floor polishing services" />
              <h3>Marble floor polishing services</h3>
            </div>
          </div>
        </div>
        <div className="tiles-collections">
          <h1>Our Collections</h1>
          <div className="tiles-collection">
            <div>
              <h2>IMarble</h2>
              <p>An internationally acclaimed product range blending advanced technology and italian marble aesthetics in various formats and finishes,enhancing functionality and properties.</p>
            </div>
            <div>
              <h2>Stoneware</h2>
              <p>The highest standards of Functional,Physical, Technical & Aesthetic properties of these trendy designs are ideal for various Indoor & Outdoor residential & commerical surface spaces. </p>
            </div>
            <div>
              <h2>GVT</h2>
              <p>An urban & classy product range featuring various formats, finishes & designs in Digital Printed Glazed Vitrified Tiles bestowing great ambience within wak & floor covering spaces.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Services
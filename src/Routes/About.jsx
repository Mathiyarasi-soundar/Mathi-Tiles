import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import image from '../Components/images/Home-images/file.png'
import './Styles/About.css'
import sample from '../Components/images/About-images/Tiles-image.png'
import Aboutdata from './Aboutdata'
import Footer from '../Components/Footer/Footer'

function About() {
  return (
    <div>
      <Navbar />
      <div className='about-container'>
        <img className='about-img' src={image} alt="img" />
        <div className="about-head">
          <h1>About</h1>
        </div>
      </div>
      <div className="about-content">
        <div className="history-and-image">
          <div className="sample-image">
            <img src={sample} alt="Mathi Tiles" />

          </div>
          <div className="about-history">
            <h1>Our History</h1>
            <p>Mathi Tiles pvt Ltd, a leading company has been at the forefront of this dynamic industry, offering an extensive array of latest designs, materials and finishes to cater to diverse requirements and preferences of its elite list of clientele.
              Our invincibe expertise and rich experience has raised our spirit to reach ahead from our client's expectation.Commendable success rate of other portals managed by Mathi Tiles is a live paradigm of our work excellence.
              Offering premium quality tiles at budget prices and high end quality tiles at affordable prices to suit every customer’s budget, has made Mathi Tiles immensely popular among its customers.
              At Mathi Tiles, passion, work ethics, attention to detail, and personal involvement matter more than age and experience, and we equip our franchisees with these tools for success.
            </p>
          </div>
        </div>
        <div className="about-mission">
          <h1>Our Mission</h1>
          <p>To thrill our customers with great design and value proportion driven by continuous improvements in tile creativity, innovation, cost efficiency and customer service.</p>
        </div>
        <div className="about-vision">
          <h1>Our Vission</h1>
          <p>Gain world wide recognition in the field of ceramic building products through Research and Innovation and bring an enhanced lifestyle within reach for every household.</p>
        </div>
        <div className="about-values">
          <h1>Core Values</h1>
          {Aboutdata.map((data, index) => (
            <div key={index} className="core-values">
              <div className='core-value'>
                <img src={data.img} alt={data.name} />
                <h4>{data.name}</h4>
                <h4>{data.heading}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
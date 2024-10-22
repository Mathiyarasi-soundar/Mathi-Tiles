import React from 'react'
import './Styles/Contact.css'
import Navbar from '../Components/Navbar/Navbar'
import image from '../Components/images/Home-images/file.png'
import sample from '../Components/images/About-images/Tiles-image.png'
import Footer from '../Components/Footer/Footer'
function ContactUs() {
  return (
    <div>
      <Navbar />

      <div className="about-container">
        <img className='about-img' src={image} alt="about" />
        <div className="about-head">
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className="contact-section">
        <div className="contact-details">
          <img src={sample} alt="Mathi Tiles" />
          <h3>Address</h3><hr />
          <p>42, Velachery Road, Tambaram, Chennai.
            Tamil Nadu, INDIA.</p>
          <h3>Contact</h3><hr />
          <p>Phone No 1    :   +91 72946 00307</p>
          <p>Phone No 2    :   +91 72946 00308</p>
          <h3>E-Mail</h3><hr />
          <p>Mail To    :   mathitiles@gmail.com</p>
        </div>
        <div className="contact-form">
          <h1>Send a message to us!</h1>
          <form action="">
            <label htmlFor="name">Name</label>
            <input type="text" />
            <label htmlFor="E-mail">E-mail</label>
            <input type="text" />
            <label htmlFor="city">City</label>
            <input type="text" />
            <label htmlFor="district">District</label>
            <input type="text" />
            <label htmlFor="state">State</label>
            <input type="text" />
            <label htmlFor="message">Message</label>
            <textarea rows='4'></textarea>
            <button>Send Message</button>
          </form>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ContactUs
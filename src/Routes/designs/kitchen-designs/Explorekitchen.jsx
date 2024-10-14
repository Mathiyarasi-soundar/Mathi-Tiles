import React from 'react'
import Exploreitems5 from './Exploreitems5'
import '../../Styles/designs.css'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Explorekitchen() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Kitchen Tiles</h1>
      <p>A well-decorated kitchen space is the heart and soul of a home. There is a wide range of stunning kitchen tiles available at Mathi Tiles that can modify the look and feel of the kitchen space. The vast variety of kitchen tile designs available here is made with advanced technology. </p>
      <p>Vitrified, ceramic, and porcelain, are some of the materials used in the manufacturing of these kitchen tile designs.There are different sizes of kitchen tile designs available at Mathi Tiles.  </p>
      <div className="explore-designs">
        {Exploreitems5.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.Name} />
            <h2>{item.Name}</h2>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Explorekitchen
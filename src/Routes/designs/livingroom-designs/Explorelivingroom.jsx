import React from 'react'
import Exploreitems3 from './Exploreitems3';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Explorelivingroom() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Living Room Tiles</h1>
      <p>The living room is one of the busiest spaces in the house that needs the utmost attention for creating a relaxing, inviting and rejuvenating space. So, it's important to choose a material that is durable and easy to maintain. Living room tile design can be a stylish way to add personality to your living room.</p>
      <p>Hall tiles are durable and easy to maintain, making them a sensible choice for your high-traffic area. At Mathi Tiles, we have a wide variety of living room tiles in different sizes, colours, materials, textures, prices and designs.</p>
      <div className="explore-designs">
        {Exploreitems3.map((item, index) => (
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

export default Explorelivingroom
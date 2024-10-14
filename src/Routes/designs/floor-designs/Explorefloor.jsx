import React from 'react'
import Exploreitems1 from './Exploreitems1';
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';
import '../../Styles/designs.css'

function Explorefloor() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Floor Tiles</h1>
      <p>The floor is the base of your home, and choosing the right tiles will ensure that your base remains strong. Floor home tiles are available in a variety of materials, such as vitrified, ceramic, porcelain, etc. and you can select the material depending upon your requirements.</p>
      <p>Floor tiles are available in a variety of designs, such as wooden, marble, stone, geometric, floral, granite, mosaic, abstract, etc. and various colours, such as black, white, cream, ivory, blue, green, pink, etc. This sheer variety of designs and colours ensures that you can find a tile that works with your overall design style and colour palette.</p>
      <div className="explore-designs">
        {Exploreitems1.map((item, index) => (
          <div key={index} >
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

export default Explorefloor
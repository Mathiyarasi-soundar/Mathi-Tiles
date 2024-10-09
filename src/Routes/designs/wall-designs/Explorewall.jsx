import React from 'react'
import Exploreitems2 from './Exploreitems2'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Explorewall() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Wall Tiles</h1>
      <p>Traditionally, tiles were preferred only for floors, but with the change in times and trends, the use of tiles has been extended to the walls as well! You can choose the wall tile of your choice from a wide range of wall tile designs available at Mathi Tiles. </p>
      <p>Discover the latest wall tile design options to turn any space into a stylish setting with modern elegance.
        Whether you are looking for an innovative 3D tile design for a wall or a subtle pattern wall tile design, there is a choice for every taste. Perfect for every setting, our wall tile design choices are the epitome of luxurious settings.</p>
      <div className="explore-designs">
        {Exploreitems2.map((item, index) => (
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

export default Explorewall
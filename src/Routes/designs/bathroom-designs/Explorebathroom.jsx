import React from 'react'
import Exploreitems6 from './Exploreitems6'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Explorebathroom() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Bathroom Tiles</h1>
      <p>Add a touch of style and personality to your bathroom with the stunning range of modern bathroom tiles by Mathi Tiles. When picked right, these tiles can enhance the overall look of your bathroom by drawing attention to the floors and walls. </p>
      <p>Orientbell Tiles brings to you a curated selection of luxury bathroom tiles design that work efficiently to elevate your space. From bathroom tile designs that infuse traditional elegance to modern options to refresh your space, our range of bathroom tile designs has the right blend of design, finish, and materials.</p>
      <div className="explore-designs">
        {Exploreitems6.map((item, index) => (
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

export default Explorebathroom
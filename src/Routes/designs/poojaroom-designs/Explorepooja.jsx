import React from 'react'
import Exploreitems4 from './Exploreitems4'
import Navbar from '../../../Components/Navbar/Navbar';
import Footer from '../../../Components/Footer/Footer';

function Explorepooja() {
  return (
    <>
    <Navbar/>
    <div className='explore-container'>
      <h1>Pooja Room Tiles</h1>
      <p>Pooja Room tiles have long been a symbol of classic beauty and devotional,with their unique veining and patterns bring a distinctive touch and create a luxurious atmosphere. Apart from their stunning look, pooja room tiles come with a range of practical benefits.  </p>
      <p>Discover our latest range of pooja room design tiles that effortlessly bring luxury and style to any setting. Our collection features a wide variety of finishes, colours, and sizes, ensuring that there’s a perfect option for every interior design vision.</p>
      <div className="explore-designs">
        {Exploreitems4.map((item, index) => (
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

export default Explorepooja
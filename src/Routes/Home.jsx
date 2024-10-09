import React from 'react'
import './Styles/Home.css'
import Navbar from '../Components/Navbar/Navbar'
import Heropage from '../Components/Heropage/Heropage'
import Footer from '../Components/Footer/Footer'
import tile1 from '../Components/images/Home-images/floor tile icon.png'
import tile2 from '../Components/images/Home-images/wall tile icon.png'
import tile3 from '../Components/images/Home-images/livingroom tile icon.png'
import tile4 from '../Components/images/Home-images/pooja tile icon.png'
import tile5 from '../Components/images/Home-images/kitchen tile icon.png'
import tile6 from '../Components/images/Home-images/bathroom tile icon.png'
import trending1 from '../Components/images/Home-images/trending-1.jpg'
import trending2 from '../Components/images/Home-images/trending-2.jpg'
import trending3 from '../Components/images/Home-images/trending-3.jpg'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
      <Navbar />
      <Heropage />
      <div className='home-container'>
        <div className="tiles-explanation">
          <h1>Mathi Tiles</h1>
          <p>Tiles are slowly becoming the most popular choice for floors and walls thanks to their longevity and ease of maintenance. Mathi Tiles has Link large number of tiles available in different materials, designs, colours, shapes, sizes, and finishes.</p>
          <p>Available in various different finishes, matte finish and glossy finish tiles are the most popular choices amongst buyers.
            The home tiles are also available in various sizes. Available in Link variety of designs, such as wooden, stone, 3D, marble, etc., the tiles are also available in Link plethora of different colours.</p>
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
        <div className="tiles-explores">
          <h1>Explore Our Tiles</h1>
          <div className="tiles-explore">
            <div>
              <img src={tile1} alt="Floor-tiles" />
              <h4>Floor Tiles</h4>
              <Link to="/floor-tiles">Explore Now</Link>
            </div>
            <div>
              <img src={tile2} alt="Wall Tiles" />
              <h4>Wall Tiles</h4>
              <Link to="/wall-tiles">Explore Now</Link>
            </div>
            <div>
              <img src={tile3} alt="Living Room Tiles" />
              <h4>Living Room Tiles</h4>
              <Link to="/livingroom-tiles">Explore Now</Link>
            </div>
            <div>
              <img src={tile4} alt="Pooja room Tiles" />
              <h4>Pooja room Tiles</h4>
              <Link to="/poojaroom-tiles">Explore Now</Link>
            </div>
            <div>
              <img src={tile5} alt="Kitchen Tiles" />
              <h4>Kitchen Tiles</h4>
              <Link to="/kitchen-tiles">Explore Now</Link>
            </div>
            <div>
              <img src={tile6} alt="Bathoom Tiles" />
              <h4>Bathroom Tiles</h4>
              <Link to="/bathroom-tiles">Explore Now</Link>
            </div>
          </div>
        </div>
        <div className="tiles-trendings">
          <h1>Trending Products</h1>
          <div className="tiles-trending">
            <div>
              <img src={trending1} alt="Vitrified Tiles" />
              <h3>The Ultima - 4DX</h3>
              <p>The 4DX Series by Mathi Eternity is not just Link product line; it's Link statement of progressive thinking and exceptional design.</p>
            </div>
            <div>
              <img src={trending2} alt="Gres Tough Tiles" />
              <h3>Gres Tough</h3>
              <p>The Gres Tough Tiles Collection reproduces the extraordinarily elegant details and natural irregularities of Italian Marble, rich in veining, streaks, marbling and knots.</p>
            </div>
            <div>
              <img src={trending3} alt="Vitronite Tiles" />
              <h3>Vitronite</h3>
              <p>The incredible range of slabs are designed for modern application and to create Link chic and urban aura for Link space.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
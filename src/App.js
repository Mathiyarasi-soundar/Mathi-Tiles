import Home from './Routes/Home.jsx';
import About from './Routes/About.jsx';
import Services from './Routes/Services.jsx';
import ContactUs from './Routes/ContactUs.jsx';
import Signup from './Routes/Signup.jsx';
import { Routes, Route } from 'react-router-dom';
import Explorefloor from './Routes/designs/floor-designs/Explorefloor.jsx';
import Explorewall from './Routes/designs/wall-designs/Explorewall.jsx';
import Explorelivingroom from './Routes/designs/livingroom-designs/Explorelivingroom.jsx';
import Explorepooja from './Routes/designs/poojaroom-designs/Explorepooja.jsx';
import Explorekitchen from './Routes/designs/kitchen-designs/Explorekitchen.jsx';
import Explorebathroom from './Routes/designs/bathroom-designs/Explorebathroom.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Services />} path='/services' />
        <Route element={<ContactUs />} path='/contactus' />
        <Route element={<Explorefloor />} path='/floor-tiles' />
        <Route element={<Explorewall />} path='/wall-tiles' />
        <Route element={<Explorelivingroom />} path='/livingroom-tiles' />
        <Route element={<Explorepooja />} path='/poojaroom-tiles' />
        <Route element={<Explorekitchen />} path='/kitchen-tiles' />
        <Route element={<Explorebathroom />} path='/bathroom-tiles' />
        <Route element={<Signup />} path='/signup' />
      </Routes>
    </div>
  );
}

export default App;

import { Component } from 'react';
import './Navbar.css';
import Menuitems from './Menuitems';
import { Link } from 'react-router-dom';



class Navbar extends Component {

    state = { clicked: false };
    handleclick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <nav className='Navbar-items'>
                <div className='logo-and-tiles'>
                    <h1 className='Navbar-logo'>Mathi </h1>
                    <p className='logo-tiles'>Tiles</p>
                </div>
                <div className='mobile-menu' onClick={this.handleclick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'Navbar-menu active' : 'Navbar-menu'}>
                    {Menuitems.map((data, index) => {
                        return (
                            <li key={index}>
                                <Link to={data.url} className={data.cName}>
                                    <i className='Navbar-icon'>{data.icon}</i> {data.name}
                                </Link>
                            </li>
                        )
                    })}

                    <button>
                        <Link to="/signup" className='Nav-links-sign'><i class="fa-solid fa-right-to-bracket"></i>Sign Up</Link>
                    </button>
                </ul>
            </nav>
        )
    }
}

export default Navbar;
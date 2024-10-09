import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <div>
                    <div className='logo-and-tiles'>
                        <h1 className='Navbar-logo'>Mathi </h1>
                        <p className='logo-tiles'>Tiles</p>
                    </div>
                    <p>Enhance Your life with our tiles.</p>
                </div>
                <div>
                    <a href="/">
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-behance-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">

                <div>
                    <h4>Collections</h4>
                    <a href="/">IMarble</a>
                    <a href="/">Stoneware</a>
                    <a href="/">GVT</a>
                </div>
                <div>
                    <h4>Project</h4>
                    <a href="/">Changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">Troubleshooting</a>
                    <a href="/">Contact Us</a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href="/">Terms of Service</a>
                    <a href="/">Privacy Policy</a>
                    <a href="/">License</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaMailBulk, FaSearchLocation, FaPhone } from 'react-icons/fa';
import './Footer.css'



const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer-container">
                <div className="left">

                    <div className="location">
                        <FaSearchLocation size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        <div>
                            <p>Űr utca 1.</p>
                            <h4>1094 Budapest</h4>
                        </div>
                    </div>
                    <div className="phone">
                       <h4>
                        <FaPhone size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        06-80-1234567
                       </h4>
                    </div>
                    <div className="email">
                       <h4>
                        <FaMailBulk size={20} style={{ color: "#fff", marginRight: '2rem' }} />
                        utazas@galaxytravel.hu
                       </h4>
                    </div>
                </div>
                
                <div className="right">
                    <h4>Rólunk</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae consequuntur adipisci soluta molestias corporis possimus error nihil quibusdam. Tempore optio harum eaque corporis voluptatum illo repudiandae, deleniti sit amet possimus voluptas quia quas porro facere pariatur repellat est id ipsa ratione. Laudantium unde distinctio labore velit odit culpa repellat doloremque?</p>
                    <div className="social">
                    <FaFacebook size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    <FaTwitter size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    <FaLinkedin size={30} style={{ color: "#fff", marginRight: '1rem' }} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
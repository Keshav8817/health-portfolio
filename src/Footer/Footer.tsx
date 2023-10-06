// src/components/Navbar.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <>
            <div className='footer'>
                <div className='sb__footer section__padding'>
                    <div  className='sb__footer-links'>
                    <div className='sb__footer-links_div'>
                            {/* <h4>Coming soon</h4> */}
                            {/* <img className='img-10' src=".\assets\logo-main.png" alt="" /> */}
                            <div className='socialmedia'>
                                <p><img src=".\assets\facebook.png" alt="" /></p>
                                <p><img src=".\assets\twitter.png" alt="" /></p>
                                <p><img src=".\assets\instagram.png" alt="" /></p>
                            </div>
                            <img className='img-11'src=".\assets\footer-shape.png" alt="" />
                        </div>
                        <div className='sb__footer-links_div'>
                            <h4>Quick Menu</h4>
                            <a href="">
                                <p>Home</p>
                            </a>
                            <a href="">
                                <p>Services</p>
                            </a>
                            <a href="">
                                <p>Contact us</p>
                            </a>
                            
                            <a href="">
                                <p>About us</p>
                            </a>
                            
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Services</h4>
                            <a href="">
                                <p>UI/UX Design</p>
                            </a>
                            <a href="">
                                <p>Web Development</p>
                            </a>
                            <a href="">
                                <p>Digital Marketing</p>
                            </a>
                            <a href="">
                                <p>App Development</p>
                            </a>
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Legal</h4>
                            <a href="">
                                <p>Terms & Conditions</p>
                            </a>
                            <a href="">
                                <p>Privacy Policy</p>
                            </a>
                            <a href="">
                                <p>FAQs</p>
                            </a>
                            <a href="">
                                <p>Blog</p>
                            </a>
                        </div>

                        <div className='sb__footer-links_div'>
                            <h4>Information</h4>
                            <a href="">
                                <p>164 Brighton Ave, Allston, Maine, U.S. - 02134e</p>
                            </a>
                            <a href="">
                                <p>+(617) 254-2333</p>
                            </a>
                        </div>

                        {/* <div className='sb__footer-links_div'>
                            <h4>Coming soon</h4>
                            <div className='socialmedia'>
                                <p><img src=".\assets\facebook.png" alt="" /></p>
                                <p><img src=".\assets\twitter.png" alt="" /></p>
                                <p><img src=".\assets\instagram.png" alt="" /></p>
                            </div>
                        </div> */}
                    </div>
                    {/* <hr/> */}
                    {/* <div className='sb__footer-below'>
                        <div className='sb__footer-copyright'>
                            <p>
                                Copyright@{new Date().getFullYear()} Plurk Technologies Pvt. Ltd.
                            </p>
                        </div>
                        <div className='sb__footer-below-links'>
                            <a href=""><div><p>Need help? Visit the Contact Us</p></div></a>
                        </div>
                    </div> */}
                </div>
                <div className='sb__footer-below'>
                        {/* <div className='sb__footer-copyright'>
                            <p>
                                Copyright@{new Date().getFullYear()} <span className='bluecolour'>Plurk Technologies Pvt. Ltd.</span>
                            </p>
                        </div> */}
                        <div className='sb__footer-below-links'>
                            <a href=""><div><p>Need help? Visit the <span className='purplecolour'>Contact Us</span></p></div></a>
                        </div>
                    </div>
            </div>
            
        </>
    );
};

export default Footer;


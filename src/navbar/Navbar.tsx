// src/components/Navbar.tsx
import React from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import './Navbar.css';
import { useEffect } from 'react';
const Navbar: React.FC = () => {
    useEffect(() => {
        Aos.init({

        });
    }, [])
    return (
        <>
        <div className="video-container">
        <video autoPlay muted loop id="video-background">
          <source src=".\assets\video.mp4" type="video/mp4" />
          {/* Add more source elements for different video formats (e.g., webm, ogg) */}
        </video>
            <div className='top'>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/contact">Services</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='content-container'>

                <div className='text-container'>
               
                    <div className='text-1'>
                        <div>
                            <h1 data-aos="flip-left" data-aos-delay="200">Intelligent  <span className="blue-text">automation</span> <br />
                                <span className='purple-text'>for</span> healthcare.</h1>
                            <h3>Simplify the day-to-day operations of your employees and increase the flow of patients.</h3>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
                <div className='image-container'>
                    {/* <img src="./assets/doctor.jpg" alt="" /> */}
                    <img src=".\assets\healthcare-banner.png" alt="" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" />
                </div>
            </div>
</div>
        </>
    );
};

export default Navbar;


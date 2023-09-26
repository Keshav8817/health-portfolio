// src/components/Navbar.tsx
import React from 'react';

import './Navbar.css'; // Import the CSS file
const Navbar: React.FC = () => {
    return (

        <>
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
                            <a href="/contact">services</a>
                        </li>
                    </ul>

                </nav>
                <div className='content-container'>
                    <div className='text-1'>

                        <div>
                            <h1>Intelligent automation <br />for healthcare.</h1>


                        </div>
                        <h3 >Simplify the day-to-day operations of your employees and increase the flow of patients.</h3>

                        <button>read more</button>
                        {/* <img src="./assets/doctor.jpg" alt="" /> */}
                    </div>
                    <div className='image-container'>
                        <img src="./assets/doctor.jpg" alt="" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Navbar;

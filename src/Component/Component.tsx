import React, { useEffect } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';

const boxData = [
    {
        title: 'Intro',
        con1: 'Daily content update',
        con2: 'Unlimited downloads of FREE resources',
        con3: 'Unlimited PREMIUM downloads',
        con4: 'Valid commercial licenses',
        con5: 'Advanced Search',
        con6: 'No attribution required',
        con7: 'Browse with no ads',
        con8: 'Monthly',
        con9: '$14.99/month',
        con10: 'Billed every month',
        borderColor: 'skyblue',
        buttonColor: 'skyblue',

    },
    {
        title: 'Base',
        con1: 'Daily content update',
        con2: 'Unlimited downloads of FREE resources',
        con3: 'Unlimited PREMIUM downloads',
        con4: 'Valid commercial licenses',
        con5: 'Advanced Search',
        con6: 'No attribution required',
        con7: 'Browse with no ads',
        con8: 'yearly',
        con9: '$39.99/month',
        con10: '$179.00 every 12 months',
        borderColor: 'black',
        buttonColor: 'black',

    },
    {
        title: 'Pro',
        con1: 'Daily content update',
        con2: 'Unlimited downloads of FREE resources',
        con3: 'Unlimited PREMIUM downloads',
        con4: 'Valid commercial licenses',
        con5: 'Advanced Search',
        con6: 'No attribution required',
        con7: 'Browse with no ads',
        con8: 'yearly',
        con9: '$499',
        con10: 'Billed once only',
        borderColor: 'rgba(137, 43, 226, 0.616)',
        buttonColor: 'rgba(137, 43, 226, 0.616)',

    },
];
const Component: React.FC = () => {
    useEffect(() => {
        Aos.init({

        });
    }, [])
    return (
        <>
            <div className='main'>
                <h4>Our Specialties</h4>
                <h1>Experience in multiple disease</h1>

                <div className='box'>
                    <div data-aos="zoom-in" data-aos-delay="200" className='box1'>
                        <h2>General</h2>
                        <img src=".\assets\checkup.png" alt="" />
                        We provide a general medical check - up & consultation of our best doctors team.
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='box1'>
                        <h2>Nutrition</h2>
                        <img src=".\assets\nuitrition.png" alt="" />
                        Nutrition Services treats healthy individuals as well as those being seen for acute or chronic illnesses.
                    </div>
                    <div data-aos="zoom-in" data-aos-delay="200" className='box1'>
                        <h2>Orthopedic</h2>
                        <img src=".\assets\orthopedic.png" alt="" />
                        Our orthopedic team has completed over 7000+ surgeries and many more to come.
                    </div>
                </div>
            </div>

            <div className='main-1'>
                <h4>Team. Peoples. Support</h4>
                <h1>As featured with medical companies</h1>


                <div className='box-21' >
                    <div className='box2'>
                        <div data-aos="fade-left" data-aos-delay="0"> <img src=".\assets\codelify.png" alt="" />Codelify</div>
                        <div data-aos="fade-left" data-aos-delay="200"><img src=".\assets\veterinary.png" alt="" />Veterinary</div>
                        <div data-aos="fade-left" data-aos-delay="400"><img src=".\assets\software.png" alt="" />Software</div>
                        <div data-aos="fade-left" data-aos-delay="600"><img src=".\assets\blockly.png" alt="" />Blockly</div>
                        <div data-aos="fade-left" data-aos-delay="800"><img src=".\assets\techlify.png" alt="" />Techliy</div>
                        <div data-aos="fade-left" data-aos-delay="1000"><img src=".\assets\finance.png" alt="" />Financialy</div>
                        <div data-aos="fade-left" data-aos-delay="1200"><img src=".\assets\startup.png" alt="" />Startup</div>
                        <div data-aos="fade-left" data-aos-delay="1400"><img src=".\assets\camera.png" alt="" />Camera</div>
                    </div>
                    
                </div>


{/* ------------------------------------------------------------------------------ */}


                <div className='main-2'>

                    <div className='box3'>

                        <div className='box4'>
                            <img data-aos="zoom-in" data-aos-delay="200" src=".\assets\image-2.avif" className='image__1' alt="" />
                            <h1>22+</h1>
                            <h4>Health Sections</h4>

                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className='box4'>
                            <img src=".\assets\services.png" className='image__1' alt="" />
                            <h1>145+</h1>
                            <h4>Different Services</h4>
                        </div>
                        <div data-aos="zoom-in" data-aos-delay="200" className='box4'>
                            <img src=".\assets\Satisfied_Patients.png" className='image__1' alt="" />
                            <h1>3500+</h1>
                            <h4>Satisfied Patients </h4>
                        </div>
                    </div>
                </div>
            </div>

        


            {/* -------------------------------- */}

            <div className='main-3'>
                <div className='image-container10'>
                    <img src="./assets/doctor-4-img.png" alt="" />
                </div>
                <div className='box5'>
                    <h4 data-aos="fade-left">Our Doctor’s</h4>
                    <h1 data-aos="fade-left">With us your Doctor’s is just click away</h1>
                    <h5 data-aos="fade-left">Good health is a state of mental, physical and social well being and it does not just mean the absence of disease!</h5>
                    <br />
                    <h3 data-aos="fade-left">Always there to care for You</h3>

                    <h3 data-aos="fade-left">We care about your health system</h3>

                    <h3 data-aos="fade-left">All our team doctor has friendly</h3>
                    <button>Meet Our Staff</button>

                </div>
            </div>

            {/* -------------------------------- */}

            <div className='main-4'>
                <h4>Time Schedule</h4>
                <h1>Save your valuable Time</h1>
                <div className='box6'>

                    <div className='box-6' data-aos="zoom-in" data-aos-delay="200">


                        <div className='box-6-1'>


                            <br />
                            <h3>Monday-Friday-</h3>
                            <hr />
                            <h3>Saturday-    </h3>

                            <hr />
                            <h3>Sunday-</h3>
                        </div>

                        Opening hours

                        <div className='box-6-2'>
                            <br />
                            <h3>8:00 am - 11:00 pm</h3>

                            <hr />
                            <h3>9:00 am - 8:00 pm</h3>
                            <hr />
                            <h3>10:00 am - 1:00 pm</h3>
                        </div>
                    </div>
                    <div className='box-6' data-aos="zoom-in" data-aos-delay="200">

                        <div className='box-6-1'>
                            <br />
                            <h3>Monday-Friday-</h3>
                            <hr />
                            <h3>Saturday-</h3>

                            <hr />
                            <h3>Sunday-</h3>
                        </div>
                        Closing hours
                        <div className='box-6-2'>
                            <br />
                            <h3>9:00 am - 5:00 pm</h3>

                            <hr />
                            <h3>10:00 am - 5:00 pm</h3>
                            <hr />
                            <h3>Closed</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* ------------------------------------------------------------------ */}


            <div className='main-5'>
                <h4>Meet Our Team</h4>
                <h1>Our experienced doctors</h1>

                <div className='box-7' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className='box-7-1'>

                        <img src=".\assets\femaleDoctor2.avif" alt="" />
                        <h3>Stella Andrew</h3>
                        <h5>Gastrologist</h5>

                    </div>


                    <div className='box-7-1'>

                        <img src=".\assets\maleDoctor.avif" alt="" />
                        <h3>Steve Jhonson</h3>
                        <h5>Dentist</h5>

                    </div>
                    <div className='box-7-1'>

                        <img src=".\assets\femaleDoctor.avif" alt="" />
                        <h3>Amy Reacher</h3>
                        <h5>Orthopedician</h5>
                    </div>

                </div>


            </div>



{/* ---------------------------------------------------------------------- */}






            <div className="box-10">
                <h3>Pricing Plan</h3>
                <h1>Choose Affordable Prices</h1>
                <div className='box-9'>
                    {boxData.map((box, index) => (

                        <div data-aos="zoom-in" className={`box-8 box-8-hover-${box.title.toLowerCase()}`} key={index} style={{ border: `2px solid ${box.borderColor}` }}>
                            {/* <p ><img src="./assets/tick.png" alt="" /><span>{box.con5}</span></p> */}
                            <h2 >{box.title}</h2>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con1}</span></p>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con2}</span></p>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con3}</span></p>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con4}</span></p>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con5}</span></p>
                            <p ><img src="./assets/tick.png" alt="" /><span>{box.con5}</span></p>
                            <p><img src="./assets/tick.png" alt="" /><span>{box.con6}</span></p>
                            <p><img src="./assets/tick.png" alt="" /><span>{box.con7}</span></p>
                            <hr />

                            <p className="button-on-right" >{box.con8} <span ><button style={{ backgroundColor: box.buttonColor, border: `2px solid ${box.borderColor}` }}>{box.con9}</button></span></p>
                            <p className='box-font'>{box.con10}</p>
                        </div>

                    ))}
                </div>
            </div>
            {/* ---------------------------------------------------------------*/}

            <div className='main-7'>
                <div className='box-11'>
                    <h4>Testimonial</h4>
                    <h1>Feedback from our clients</h1>
                    <div data-aos="fade-left"
                        className="box-12"
                        data-aos-delay="800">
                        <div data-aos="fade-left" data-aos-delay="800" className="left-image1">
                            <img src="./assets/star.png" alt="Image 1" />
                        </div>
                        <div data-aos="fade-left" data-aos-delay="800" className="right-images3">

                            <img src=".\assets\blue-quote.png" alt="Image 3" />
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-delay="800" className='left-content1'>
                        <h5>I had a great experience with doctor Ralph Edward. His surgery technique is very good. I am satisfied with his team members. Thank You!!</h5>
                        <h3>Jack danver</h3>
                        <h5>Patient of cancer</h5>
                    </div>

                </div>
                <div className="right-image1">
                    <img src=".\assets\testimonial3.png" alt="" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" />
                </div>

            </div>





        </>
    );
};

export default Component;



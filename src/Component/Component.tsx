import React from 'react';

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
      con8:'Monthly',
      con9:'$14.99/month',
    
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
      con8:'yearly',
      con9:'$39.99/month',
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
      con8:'yearly',
      con9:'$499',
    },
  ];
const Component: React.FC = () => {
    
    return (
        <>
           <div className='main'>
                <h4>Our Specialties</h4>
                <h1>Experience in multiple disease</h1>

                <div className='box'>
                    <div className='box1'> 
                        <h2>General</h2>
                        We provide a general medical check - up & consultation of our best doctors team.
                     </div>
                    <div className='box1'>
                        <h2>Nutrition</h2>
                         Nutrition Services treats healthy individuals as well as those being seen for acute or chronic illnesses.
                    </div>
                    <div className='box1'> 
                        <h2>Orthopedic</h2>
                        Our orthopedic team has completed over 7000+ surgeries and many more to come.
                     </div>
                </div>
           </div>

           <div className='main-1'>
                    <h4>Team. Peoples. Support</h4>
                <h1>As featured with medical companies</h1>

                <div className='box2'>
                    <h3>Codelify</h3>
                    <h3>Veterinary</h3>
                    <h3>Software</h3>
                    <h3>Techlify</h3>
                    <h3>Blockly</h3>
                    <h3>Startup</h3>

                </div>
           </div>

           <div className='main-2'>
           <div className='box3'>
                    <div className='box4'> 
                        <h1>22+</h1>
                        <h4>Health Sections</h4>
                       
                     </div>
                    <div className='box4'>
                        <h1>145+</h1>
                        <h4>Different Services</h4>
                    </div>
                    <div className='box4'> 
                        <h1>3500+</h1>
                        <h4>Satisfied Patients </h4>
                     </div>
                </div>
           </div>


           {/* -------------------------------- */}

           <div className='main-3'>
            <div className='image-container'>
                <img src="./assets/doctor-4-img.png" alt="" />
            </div>
            <div className='box5'>
                <h4 >Our Doctor’s</h4>
                <h1>With us your Doctor’s is just click away</h1>
                <h5>Good health is a state of mental, physical and social well being and it does not just mean the absence of disease!</h5>
                <br />
                <h3>Always there to care for You</h3>
                
                <h3>We care about your health system</h3>
                
                <h3>All our team doctor has friendly</h3>
                <button>Meet Our Staff</button>
                
            </div>
           </div>
          
{/* -------------------------------- */}

        <div className='main-4'>
            <h4>Time Schedule</h4>
            <h1>Save your valuable Time</h1>
            <div className='box6'>
           
                <div className='box-6'>
                
               
                    <div className='box-6-1'>
                       
                      
                      
                        <h3>Monday-Friday-</h3>
                        <hr />
                        <h3>Saturday-</h3>
                        <hr />
                        <h3>Sunday-</h3>
                    </div>
                    <div className='box-6-2'>
                    <h3>8:00 am - 11:00 pm</h3>

                        <hr />
                        <h3>9:00 am - 8:00 pm</h3>
                        <hr />
                        <h3>10:00 am - 1:00 pm</h3>
                    </div>
                </div>
                <div className='box-6'>
                    
                    <div className='box-6-1'>
                        <h3>Monday-Friday-</h3>
                        <hr />
                        <h3>Saturday-</h3>
                        <hr />
                        <h3>Sunday-</h3>
                    </div>
                    <div className='box-6-2'>
                    <h3>9:00 am - 5:00 pm</h3>

                        <hr />
                        <h3>10:00 am - 5:00 pm</h3>
                        <hr />
                        <h3>Closed</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='main-5'>
                <h4>Meet Our Team</h4>
                <h1>Our experienced doctors</h1>

                <div className='box-7'>
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

    
           <div className="box-10">
           <h4>Pricing Plan</h4>
           <div className='box-9'>
                {boxData.map((box, index) => (
               
                <div className="box-8" key={index}>
                <h2>{box.title}</h2>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con1}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con2}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con3}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con4}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con5}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con6}</span></p>
                <p><img src="./assets/tick.png" alt="" /><span>{box.con7}</span></p>
                <hr />
                <p className="button-on-right">{box.con8} <span><button>{box.con9}</button></span></p>
                </div>
           
            ))}
            </div>
        </div>
        
        </>
    );
};

export default Component;



import React, { useState } from 'react';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const MyForm: React.FC = () => {
    useEffect(() => {
        Aos.init({

        });
    }, [])
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        mobile: '',
        city: '',
        disease: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className='main-container'>
            <div className='main-container-2'>
                <div className='image-1-container'>
                    <h4>Get in Touch</h4>
                    <h1>Book</h1>
                   <h1> Appointment</h1>
                    <img src=".\assets\form-image.png" alt="" />
                </div>
                <div className='form-container' data-aos="flip-left" data-aos-delay="200">

                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group input-with-icon">
                                <label>
                                    Full Name:
                                    <input
                                     
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-group input-with-icon2">
                                <label>
                                    Email:
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group input-with-icon3">
                                <label>
                                    Mobile:
                                    <input
                                        type="tel"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                            <div className="form-group input-with-icon4">
                                <label>
                                    City:
                                    <input
                                        type="text"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="form-group1 input-with-icon5">
                            <label>
                                Disease:
                                <input
                                    type="text"
                                    name="disease"
                                    value={formData.disease}
                                    onChange={handleChange}
                                />
                            </label>
                        </div>
                        <button className='btn-2' type="submit">Book now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyForm;

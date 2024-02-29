import React, {useState} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../../App.css';
import {Link} from "react-router-dom";

export default function CustomerRegister(props) {
    const baseUrl = 'http://127.0.0.1:8000/API/register/';
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const [registerFormData, setRegisterFormData] = useState({
        "first_name": '',
        "last_name": '',
        "username": '',
        "email": '',
        "password": '',
        'role' : ''
    });

    const handleInputChange = (event) => {
        setRegisterFormData({
            ...registerFormData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(baseUrl, {
            first_name: registerFormData.first_name,
            last_name: registerFormData.last_name,
            username: registerFormData.username,
            email: registerFormData.email,
            password: registerFormData.password,
            role : 2
        })
            .then(response => {
                // Handle response after successful registration
                console.log(response.data);
                if (response.data.status === 200) {
                    setRegistrationSuccess(true);
                    Swal.fire('Success', response.data.message, 'success');
                    if (registrationSuccess) {
                        window.location.href = 'http://localhost:3000/customer/otp';
                    }
                } else {
                    Swal.fire('Error', response.data.message, 'error');
                }// Set registration success flag to true
                console.log(registrationSuccess);
                // Redirect to the OTP verification page
                // window.location.href = 'http://localhost:3000/customer/otp';
                // Redirect to the OTP verification page
                // props.history.push('/customer/otp');
            })
            .catch(error => {
                // Handle error during registration
                console.error(error);
            });
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header mb-4'>Register</h4>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control rounded-4" id="first_name"
                                           name="first_name" required onChange={handleInputChange}/>
                                    <label htmlFor="last_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control rounded-4" id="last_name"
                                           name="last_name" required onChange={handleInputChange}/>
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control rounded-4" id="username" name="username"
                                           required onChange={handleInputChange}/>
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control rounded-4" id="email" name="email"
                                           required onChange={handleInputChange}/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-4" id="password"
                                           name="password" required onChange={handleInputChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                                <button type="submit" className="btn btn-dark float-end"><Link to="/customer/otp">Verfy Otp</Link></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

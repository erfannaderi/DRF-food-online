import React, {useState} from 'react';
import axios from 'axios';

import '../../App.css'
import {Link} from "react-router-dom";

export default function Login() {
    const [formError, setFormError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const baseUrl = 'http://127.0.0.1:8000/API/'
    const [loginFormData, setLoginFormData] = useState({
        "email": '',
        "password": ""
    })
    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('email', loginFormData['email']);
        formData.append('password', loginFormData['password']);

        axios.post(baseUrl + 'customer/login-1/', formData)
            .then(function (response) {
                console.log(response);
                if (response.data.bool === false) {
                    setFormError(true);
                    setErrorMessage(response.data.message);
                } else {
                    localStorage.setItem('customer_login', true);
                    localStorage.setItem('customer_email', response.data.user);
                    setFormError(false);
                    setErrorMessage('');
                }
                console.log(formError, errorMessage);
                console.log(localStorage.getItem('customer_email'));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const buttonEnabled = loginFormData['email'] !== '' && loginFormData['password'] !== '';
    const buttonEnabledOtp = loginFormData['email'] !== '';
    const checkCustomer = localStorage.getItem('customer_login');
    if (checkCustomer) {
        window.location.href = '/customer/dashboard';
    }


    return (
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card custom-card-accounts'>
                        <h4 className='card-header mb-4 custom-header-accounts'>Login</h4>
                        <div className="card-body custom-input-accounts">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" onChange={inputHandler} value={loginFormData.email}
                                           className="form-control rounded-4 .custom-input-accounts" id="email"
                                           name="email" required/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" onChange={inputHandler} value={loginFormData.password}
                                           className="form-control rounded-4 .custom-input-accounts" id="password"
                                           name="password" required/>
                                </div>
                                <button type="button" disabled={!buttonEnabled} onClick={submitHandler}
                                        className="btn btn-primary custom-button-accounts mb-5">Login
                                </button>
                                {/*<button type="button" disabled={!buttonEnabledOtp} onClick={submitHandler}*/}
                                {/*        className="btn btn-dark custom-button-accounts float-end"><Link to=''>OTP*/}
                                {/*    Login</Link>*/}
                                {/*</button>*/}
                                {formError &&
                                    <p className="text-danger">{errorMessage}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


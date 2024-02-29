import React, {useState} from 'react';
import axios from 'axios';

import '../../App.css';

export default function CustomerLogin() {
    const baseUrl = 'http://127.0.0.1:8000/API/';

    const [formError, setFormError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loginFormData, setLoginFormData] = useState({
        "email": '',
        "password": ""
    });

    const inputHandler = (event) => {
        setLoginFormData({
            ...loginFormData,
            [event.target.name]: event.target.value
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        axios.post(baseUrl + 'customer/login-2/', {
            email: loginFormData.email,
            password: loginFormData.password
        })
            .then(function (response) {
                console.log(response.data);
                if (response.data.jwt) { // Assuming jwt is returned upon successful login
                    localStorage.setItem('customer_login', true);
                    localStorage.setItem('customer_email', loginFormData.email);
                    setFormError(false);
                    setErrorMessage('');

                    // Redirect to the dashboard page after successful login
                    window.location.href = '/customer/dashboard';
                } else {
                    setFormError(true);
                    setErrorMessage('Invalid email or password. Please try again.');
                }
            })
            .catch(function (error) {
                console.log(error);
                setFormError(true);
                setErrorMessage('An error occurred. Please try again.');
            });
    };

    const buttonEnabled = loginFormData.email !== '' && loginFormData.password !== '';

    return (
        <div className='container mt-4'>
            <div className='row'>
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
                                        className="btn btn-primary custom-button-accounts">Login
                                </button>
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

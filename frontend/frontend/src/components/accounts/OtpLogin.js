import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

import '../../App.css';

export default function OtpVerf(props) {
    const baseUrl = 'http://127.0.0.1:8000/API/verify/';

    const [otpFormData, setOtpFormData] = useState({
        "email": "",
        "otp": ""
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (event) => {
        setOtpFormData({
            ...otpFormData,
            [event.target.name]: event.target.value
        });
    };

    const handleVerify = (event) => {
        event.preventDefault();

        axios.post(baseUrl, {
            email: otpFormData.email,
            otp: otpFormData.otp
        })
            .then(response => {
                // Handle response after OTP verification
                console.log(response.data);
                if (response.data.status === 200) {
                    Swal.fire('Success', response.data.message, 'success');
                } else {
                    Swal.fire('Error', response.data.message, 'error');
                }
            })
            .catch(error => {
                // Handle error during OTP verification
                console.error(error);
                if (error.response && error.response.data && error.response.data.message) {
                    Swal.fire('Error', error.response.data.message, 'error');
                } else {
                    Swal.fire('Error', 'An error occurred. Please try again.', 'error');
                }
                console.error(error);
            });
    };

    const handleResendOtp = (event) => {
        event.preventDefault();

        axios.patch(baseUrl, {
            email: otpFormData.email
        })
            .then(response => {
                // Handle response after resending OTP
                console.log(response.data);
            })
            .catch(error => {
                // Handle error during OTP resend
                console.error(error);
            });
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header mb-4'>Verify Account</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control rounded-4" id="email" name="email" required onChange={handleInputChange} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                    <label htmlFor="otp" className="form-label">OTP</label>
                                    <input type="text" className="form-control rounded-4" id="otp" name="otp" required onChange={handleInputChange} />
                                </div>
                                <button type="submit" className="btn btn-primary ms=4" onClick={handleVerify}>Verify</button>
                                <button type="submit" className="btn btn-warning float-end" onClick={handleResendOtp}>Resend OTP</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

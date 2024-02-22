import React from 'react';

import '../../App.css'

export default function Login(props) {
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
                                    <input type="email" className="form-control rounded-4 .custom-input-accounts" id="email" name="email" required/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-4 .custom-input-accounts" id="password" name="password" required/>
                                </div>
                                <button type="submit" className="btn btn-primary custom-button-accounts">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


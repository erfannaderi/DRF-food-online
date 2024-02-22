import React, {useState} from 'react';
import CustomerSidebar from "../includes/CustomerSidebar";
import {Link} from "react-router-dom";

export default function AddressList() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <CustomerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-12'>
                            <Link to='/customer/add-address' className='btn btn-outline-success mb-4 float-end'>
                                <i className='fas fa-plus-circle'></i> <span>Add New Address</span>
                            </Link>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <div className='row'>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                    <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                        <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                        <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                        <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                        <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-2'>
                                    <div className="card">
                                        <div className='card-body text muted'>
                                            <h5>tehran,Iran,smith street</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import {Link} from "react-router-dom";
import SellerSidebar from "../includes/SellerSidebar";
import React from "react";
import logo from "../../logo.jpg";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
export default function Customers() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <div className='table-responsive'>
                                <table className="table table-bordered border-light-subtle">
                                    <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                        {/*<td><Link  className=" btn btn-primary" to="/">write a review</Link></td>*/}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John</td>
                                        <td>

                                            <p className='food-checkout badge badge-info rounded text-light w-50 text-center'>John@gmail.com</p>
                                        </td>
                                        <td>+14440212222</td>

                                        <td>
                                            <button className='btn btn-sm btn-danger'> remove from list</button>
                                            <button className='btn btn-sm btn-info ms-2'> Orders
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>John</td>
                                        <td>

                                            <p className='food-checkout badge badge-info rounded text-light w-50 text-center'>John@gmail.com</p>
                                        </td>
                                        <td>+14440212222</td>

                                        <td>
                                            <button className='btn btn-sm btn-danger'> remove from list</button>
                                            <button className='btn btn-sm btn-info ms-2'> Orders</button>
                                        </td>
                                    </tr>


                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

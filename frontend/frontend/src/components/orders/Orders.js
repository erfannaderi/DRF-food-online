import {Link} from "react-router-dom";
import CustomerSidebar from "../includes/CustomerSidebar";
import React from "react";
import logo from "../../logo.jpg";

export default function Orders() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <CustomerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <div className='table-responsive'>
                                        <table className="table table-bordered border-light-subtle">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                                {/*<th>Action</th>*/} {/*<td><Link  className=" btn btn-primary" to="/">write a review</Link></td>*/}
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <Link to='/'>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={logo}
                                                                 className="img-thumbnail image_checkout mb-1"
                                                                 width='254px' alt="logo"/>
                                                            <p className='food-checkout badge badge-info rounded text-light w-50 text-center'>Zereshk
                                                                Polo</p>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>500,000 Toman</td>
                                                <td><p>Processing Please wait <i
                                                    className="fa-sharp fa-regular fa-stopwatch fa-shake fa-2xl"
                                                    style={{color: "#FFD43B"}}></i></p></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <Link to='/'>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={logo}
                                                                 className="img-thumbnail image_checkout mb-1"
                                                                 width='254px' alt="logo"/>
                                                            <p className='food-checkout badge badge-info rounded text-light w-50 text-center'>Zereshk
                                                                Polo</p>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>500,000 Toman</td>
                                                <td><p>Order Completed Thank You For Ordering From Us <i
                                                    className="fa-sharp fa-regular fa-fork-knife fa-2xl"
                                                    style={{color: "#44ff00"}}></i></p></td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <Link to='https://zarinp.al/zp2231468'>
                                                        <div style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            alignItems: 'center'
                                                        }}>
                                                            <img src={logo}
                                                                 className="img-thumbnail image_checkout mb-1"
                                                                 width='254px' alt="logo"/>
                                                            <p className='food-checkout badge badge-info rounded text-light w-50 text-center'>Zereshk
                                                                Polo</p>
                                                        </div>
                                                    </Link>
                                                </td>
                                                <td>500,000 Toman</td>
                                                <td><p>Order Failed Try Again<i
                                                    className="fa-sharp fa-solid  fa-bell-ring fa-beat-fade fa-2xl"
                                                    style={{color: "rgba(245,0,0,0.86)", marginLeft: "4px"}}></i></p></td>
                                            </tr>

                                            </tbody>
                                        </table>
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

import React from 'react';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";


export default function Checkout(props) {
    return (
        <div className="container mt-4">
            <h3 className='mb-4'><strong>All items</strong></h3>
            <div className='row'>
                <div className='col-md-8 col-12'>
                    <div className='table-responsive'>
                        <table className="table table-bordered border-light-subtle">
                            <thead>
                            <tr>
                                <th className="number_checkout">#</th>
                                <th className="product-checkout">product</th>
                                <th className='price-checkout'>price</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td className='number_checkout'>1</td>
                                <td className='product-checkout'><Link to='/'><img src={logo}
                                                                                   className="img-thumbnail image_checkout mb-1 "
                                                                                   width='256px' alt="logo"/>
                                    <p className='food-checkout bage badge-info rounded text-light w-50'>zereshk
                                        polo</p></Link>
                                </td>
                                <td className='price-checkout'>500 hezar toman</td>
                            </tr>
                            <tr>
                                <td className='number_checkout'>1</td>
                                <td className='product-checkout'><Link to='/'><img src={logo}
                                                                                   className="img-thumbnail image_checkout mb-1 "
                                                                                   width='256px' alt="logo"/>
                                    <p className='food-checkout bage badge-info rounded text-light w-50'>zereshk
                                        polo</p></Link>
                                </td>
                                <td className='price-checkout'>500 hezar toman</td>
                            </tr>
                            <tr>
                                <td className='number_checkout'>1</td>
                                <td className='product-checkout'><Link to='/'><img src={logo}
                                                                                   className="img-thumbnail image_checkout mb-1 "
                                                                                   width='256px' alt="logo"/>
                                    <p className='food-checkout bage badge-info rounded text-light w-50'>zereshk
                                        polo</p></Link>
                                </td>
                                <td className='price-checkout'>500 hezar toman</td>
                            </tr>
                            <tr>
                                <td className='number_checkout'>1</td>
                                <td className='product-checkout'><Link to='/'><img src={logo}
                                                                                   className="img-thumbnail image_checkout mb-1 "
                                                                                   width='256px' alt="logo"/>
                                    <p className='food-checkout bage badge-info rounded text-light w-50'>zereshk
                                        polo</p></Link>
                                </td>
                                <td className='price-checkout'>500 hezar toman</td>
                            </tr>
                            </tbody>
                            <tfoot>
                            <tr>
                                <th className='number_checkout'></th>
                                <th className='product-checkout'>Total</th>
                                <th className='price-checkout'>50000</th>
                            </tr>
                            <tr>
                                <th colSpan={3} className='number_checkout'>
                                    <Link to='/categories' className='btn btn-warning ' style={{marginLeft :"6rem"}}> continue shopping</Link>
                                    <Link to='/' className='btn btn-black float-end'>proceed to payment</Link>
                                </th>
                            </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>


        </div>
    );
}
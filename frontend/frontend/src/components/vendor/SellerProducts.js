import React, {useState} from 'react';
import '../../App.css'
import SellerSidebar from "../includes/SellerSidebar";
import {Link} from "react-router-dom";


export default function SellerProducts(props) {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    return (
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <Link className="btn btn-sm bg-success mb-3 rounded-8" style={{fontSize: '20px'}}
                          to="/seller/product/add"><i className="fa-sharp fa-solid fa-plus-circle "
                                                      style={{color: "#45c06b", marginRight: "7px"}}></i>
                        <span>Add A Product</span>
                    </Link>
                    <div className='table-responsive '>
                        <table className='table table-bordered table-hover'>
                            <tr>
                                <th>#</th>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>product title</td>
                                <td>500</td>
                                <td>payment successful</td>
                                <td>

                                    <div className="btn-tooltip">
                                        <a className="btn btn-sm bg-primary" href="#">
                                            <i className="fa-sharp fa-solid fa-tower-observation fa-2x"
                                               style={{color: "#3a43bd"}}></i>
                                            <span className="tooltiptext">View Details</span>
                                        </a>
                                    </div>
                                    <div className="btn-tooltip">
                                        <a className="btn btn-sm bg-info" href="#">
                                            <i className="fa-sharp fa-solid fa-pencil fa-2x"
                                               style={{color: "#00fff5"}}></i>
                                            <span className="tooltiptext">Edit</span>
                                        </a>
                                    </div>
                                    <div className="btn-tooltip">
                                        <a className="btn btn-sm bg-danger" href="#">
                                            <i className="fa-sharp fa-solid fa-trash fa-2x"
                                               style={{color: "#670404"}}></i>
                                            <span className="tooltiptext">Delete</span>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}


import SellerSidebar from "../includes/SellerSidebar";
import React from "react";
import {Link} from "react-router-dom";

export default function Reports() {
    return (
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row '>
                        <div className='col-md-4 col-12 mb-2 card'>
                            <div className='card-body text-center'>
                                <h4><i className="fa-duotone fa-chart-simple"></i>Daily Reports</h4>
                                <h4 className='text-muted'><Link to="#" className="btn btn-sm btn-info">View</Link></h4>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2 card'>
                            <div className='card-body text-center'>
                                <h4><i className="fa-solid fa-chart-pie"></i>Monthly Reports</h4>
                                <h4 className='text-muted'><Link to="#" className="btn btn-sm btn-info">View</Link></h4>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2 card'>
                            <div className='card-body text-center'>
                                <h4><i className="fa-solid fa-chart-pie-simple-circle-dollar"></i>Yearly Reports</h4>
                                <h4 className='text-muted'><Link to="#" className="btn btn-sm btn-info">View</Link></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
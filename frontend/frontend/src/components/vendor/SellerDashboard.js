import React, {useState} from 'react';
import '../../App.css'
import SellerSidebar from "../includes/SellerSidebar";


export default function SellerDashboard(props) {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
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
                                <h4><i className="fa-sharp fa-solid fa-vault"
                                       style={{color: "#35ac43", marginRight: "3px"}}></i>Total Products</h4>
                                <h4 className='text-muted'><a href="#">123</a></h4>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2 card'>
                            <div className='card-body text-center'>
                                <h4><i className="fa-sharp fa-solid fa-location"
                                       style={{color: "#00f6ff", marginRight: "3px"}}></i>Total Addresses</h4>
                                <h4 className='text-muted'><a href="#">123</a></h4>
                            </div>
                        </div>
                        <div className='col-md-4 col-12 mb-2 card'>
                            <div className='card-body text-center'>
                                <h4><i className="fa-sharp fa-solid fa-heart fa-beat fa-xs"
                                       style={{color: "#ff0025", marginRight: "3px"}}></i>Total Orders</h4>
                                <h4 className='text-muted'><a href="#">123</a></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


import React from 'react';
import logo from "../../logo.jpg";
import '../../App.css';
import {Link} from "react-router-dom";


export default function FoodItem(props) {
    return (
        <div className="col-12 col-md-3 mb-4">
            <div className="custom-card card" style={{width: "18rem"}}>
                <Link to='/product/zereshk-polo/123'><img src={logo} className="card-img-top" alt="logo"/></Link>
                <div className="card-body">
                    <Link to='/product/zereshk-polo/123'><h4 className="card-title">{props.title}</h4></Link>
                    <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                </div>
                <div className="card-footer">
                    <button title="Add to Cart" className="btn btn-sm btn-success">
                        <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                    <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                        <i className="fa-solid fa-heart fa-1.2x "></i></button>
                </div>
            </div>
        </div>
    );
}
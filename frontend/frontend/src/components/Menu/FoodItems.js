import React from 'react';
import logo from "../../logo.jpg";
import '../../App.css';
import Paginations from "../includes/Paginations";
import FoodItem from "./FoodItem";


export default function FoodItems() {
    return (
        <section className="container Category">
            <h3 className="mb-4"><span className="text-warning">Polo </span> Food Items</h3>
            {/*latest product section*/}
            <div className="row mb-4">
                {/*productbox*/}
                <FoodItem title="polo morgh"/>
                <FoodItem title="polo morgh"/>
                <FoodItem title="polo morgh"/>
                <FoodItem title="polo morgh"/>
                {/*end of productbox*/}
            </div>
            <div className="row mb-4">
                {/*productbox*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title">Food title</h4>
                            <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                        </div>
                        <div className="card-footer">
                            <button title="Add to Car" className="btn btn-sm btn-success">
                                <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                            <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                <i className="fa-solid fa-heart fa-1.2x "></i></button>
                        </div>
                    </div>
                </div>
                {/*end of productbox*/}
                {/*productbox*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title">Food title</h4>
                            <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                        </div>
                        <div className="card-footer">
                            <button title="Add to Car" className="btn btn-sm btn-success">
                                <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                            <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                <i className="fa-solid fa-heart fa-1.2x "></i></button>
                        </div>
                    </div>
                </div>
                {/*end of productbox*/}
                {/*productbox*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title">Food title</h4>
                            <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                        </div>
                        <div className="card-footer">
                            <button title="Add to Car" className="btn btn-sm btn-success">
                                <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                            <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                <i className="fa-solid fa-heart fa-1.2x "></i></button>
                        </div>
                    </div>
                </div>
                {/*end of productbox*/}
                {/*productbox*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title">Food title</h4>
                            <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                        </div>
                        <div className="card-footer">
                            <button title="Add to Car" className="btn btn-sm btn-success">
                                <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                            <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                <i className="fa-solid fa-heart fa-1.2x "></i></button>
                        </div>
                    </div>
                </div>
                {/*end of productbox*/}
            </div>
            <Paginations/>
            {/*latest product end list*/}

        </section>
    );
}
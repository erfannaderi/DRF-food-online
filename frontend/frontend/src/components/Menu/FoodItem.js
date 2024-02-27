import React from 'react';
import logo from "../../logo.jpg";
import '../../App.css';
import {Link, useParams} from "react-router-dom";


export default function FoodItem(props) {
    const {product_slug, product_id} = useParams()
    return (
        <div className="col-12 col-md-3 mb-4">
                <div className="custom-card card bg-image" style={{ width: "18rem" }}>
                    <Link to={`/product/${props.product.slug}/${props.product.id}`}>
                        <img src={props.product.image} className="card-img-top food-item-image" alt="Food Image" />
                    </Link>
                <div className="card-body">
                    <Link to={`/product/${props.product.slug}/${props.product.id}`}><h4 className="card-title">{props.product.food_title}</h4></Link>
                    <h5 className="card-title text-muted">Price: {props.product.price}</h5>
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
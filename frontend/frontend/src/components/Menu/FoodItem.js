import React from 'react';
import logo from "../../logo.jpg";
import '../../App.css';
import {Link, useParams} from "react-router-dom";
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";


export default function FoodItem(props) {
    // const {product_id} = useParams();
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();

    let quantity;
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
                    {quantity === 0 ?
                        (<button className=" btn btn-primary" onClick={() => increaseCartQuantity(props.product.id)}>+
                            Add to Cart</button>)
                        :
                        <div className="d-flex align-items-center flex-row" style={{gap: ".5rem"}}>
                            <button onClick={() => increaseCartQuantity(props.product.id)} className="btn  btn-primary">+
                            </button>
                            <div>
                                <span className="fs-3">{ quantity = getItemQuantity(props.product.id)} </span> in cart
                            </div>
                            <button className="btn  btn-primary" onClick={() => decreaseCartQuantity(props.product.id)}>-
                            </button>
                            <button className="btn btn-danger" onClick={() => removeFromCart(props.product.id)}><i
                                className="fa fa-trash-can"
                                style={{marginRight: "4px"}}></i>remove
                            </button>
                        </div>}
                </div>
            </div>
        </div>
    );
}
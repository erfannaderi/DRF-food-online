import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../App.css';
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";



export default function ProductDetail2(props) {
    const {product_id} = useParams();
    // let cartAllData = [];
    const baseUrl = 'http://127.0.0.1:8000/API/Menu';
    const [productData, setProductData] = useState({});
    // const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    // const [cartItemCount, setCartItemCount] = useState(0);
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(product_id)

    useEffect(() => {
        // const storedCartData = localStorage.getItem('cartData');
        // if (storedCartData) {
        //     const cartData = JSON.parse(storedCartData);
        //     setCartItemCount(cartData.quantity);
        // }
        if (product_id) {
            fetchData(`${baseUrl}/fooditems/${product_id}`);
        }
    }, [product_id]);

    function fetchData(url) {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setProductData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    // const cartButtonHandler = (action) => {
    //     let newCartItemCount = cartItemCount;
    //
    //     if (action === 'add') {
    //         newCartItemCount += 1;
    //         setCartItemCount(newCartItemCount);
    //
    //         const cartData = {
    //             "food_item": { 'id': productData.id, "food_title": productData.food_title },
    //             'user': { 'id': 1 },
    //             "quantity": newCartItemCount
    //         };
    //         let cartString = JSON.stringify(cartData);
    //         localStorage.setItem('cartData', cartString);
    //         setCartButtonClickStatus(true);
    //     } else if (action === 'subtract') {
    //         newCartItemCount -= 1;
    //         setCartItemCount(newCartItemCount);
    //         const cartData = {
    //             "food_item": { 'id': productData.id, "food_title": productData.food_title },
    //             'user': { 'id': 1 },
    //             "quantity": newCartItemCount
    //         };
    //         let cartString = JSON.stringify(cartData);
    //         localStorage.setItem('cartData', cartString);
    //         if (newCartItemCount === 0) {
    //             localStorage.removeItem("cartData");
    //             setCartButtonClickStatus(false);
    //         }
    //     }
    //
    //
    // };


    return (
        <section className="container product-detail mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={productData.image} className="img-thumbnail" alt="product logo"/>
                </div>
                <div className='col-8'>
                    <h3>{productData.food_title}</h3>
                    <p>{productData.description}</p>
                    <h5 className="card-title">price : {productData.price} hezar toman</h5>
                    <p className="mt-3">

                        {/*// @ts-ignore*/}
                        {quantity === 0 ?
                            (<button className=" btn btn-primary" onClick={() => increaseCartQuantity(product_id)}>+
                                Add to Cart</button>)
                            :
                            <div className="d-flex align-items-center flex-row" style={{gap: ".5rem"}}>
                                <button onClick={() => increaseCartQuantity(product_id)} className="btn  btn-primary">+
                                </button>
                                <div>
                                    <span className="fs-3">{quantity} </span> in cart
                                </div>
                                <button className="btn  btn-primary" onClick={() => decreaseCartQuantity(product_id)}>-
                                </button>
                                <button className="btn btn-danger" onClick={() => removeFromCart(product_id)}><i
                                    className="fa fa-trash-can"
                                    style={{marginRight: "4px"}}></i>remove
                                </button>
                            </div>}


                        <button title="Add to Wishlist" className="btn ms-1 btn-danger">
                            <i className="fa-solid fa-heart fa-1.2x"></i><span> Wishlist </span>
                        </button>
                        <button title="Buy Now" className="btn ms-1 btn-dark">
                            <i className="fa-solid fa-bag-shopping fa-1.2x fa-bounce"></i><span> Buy Now </span>
                        </button>
                    </p>
                    <hr style={{background: "linear-gradient(#e66465, #9198e5)", width: "700px"}}/>
                    <div className="producttags">
                        <h5 className="mt-3">Tags</h5>
                        <p>
                            {/*{productData.tags && productData.tags.map((tag, index) => (*/}
                            {/*    <Link key={index} to="*"*/}
                            {/*          className="bage rounded-3 p-1 bg-secondary text-white me-1">{tag}</Link>*/}
                            {/*))}*/}
                            <p>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Polo</Link>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">morgh</Link>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Qaza
                                    Irani</Link>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Polo</Link>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">morgh</Link>
                                <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Qaza
                                    Irani</Link>
                            </p>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

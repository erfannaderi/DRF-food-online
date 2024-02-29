import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import '../../App.css';
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {CartContext, UserContext} from "../../context/Context";


export default function ProductDetail(props) {
    var cartJson = []
    const {product_id} = useParams();
    const baseUrl = 'http://127.0.0.1:8000/API/Menu';
    const [productData, setProductData] = useState({});
    const [cartButtonClickStatus, setCartButtonClickStatus] = useState(false);
    const [cartItemCount, setCartItemCount] = useState(0);
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
    const quantity = getItemQuantity(product_id)
    // const [cartData, setCartData]=useContext(CartContext)

    useEffect(() => {
        if (product_id) {
            fetchData(`${baseUrl}/fooditems/${product_id}`);
            checkProductInCart(product_id);
        }
    }, [product_id]);

    function checkProductInCart(product_id) {
        var previousCart = localStorage.getItem('cartData');
        var qolam = JSON.parse(previousCart);
        cartJson.push(qolam);
        if (cartJson != null) {
            cartJson.map((cart) => {
                if (cart != null && cart.id == product_id) {
                    setCartButtonClickStatus(true);
                }
            })
        }
    }

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
    const cartAddButtonHandler = () => {
        let previousCart = localStorage.getItem('cartData');
        let cartJson = previousCart ? JSON.parse(previousCart) : [];

        setCartItemCount(prevCount => prevCount + 1);
        increaseCartQuantity(product_id);

        // Check if the product is already in the cart
        let existingCartItem = cartJson.find(item => item.product.id === productData.id);

        if (existingCartItem) {
            existingCartItem.quantity += 1; // Increase the quantity
            // setCartData(cartJson)
        } else {
            // If not in the cart, add as a new item
            const cartData = {
                "product": {'id': productData.id, "food_title": productData.food_title},
                'user': {'id': 1},
                "quantity": 1
            };
            cartJson.push(cartData);
            // setCartData(cartJson)
        }

        let cartString = JSON.stringify(cartJson);
        localStorage.setItem('cartData', cartString);

        setCartButtonClickStatus(true);
    };

    const cartRemoveButtonHandler = () => {
        if (cartItemCount > 0) {
            let previousCart = localStorage.getItem('cartData');
            let cartJson = previousCart ? JSON.parse(previousCart) : [];

            let existingCartItemIndex = cartJson.findIndex(item => item.product.id === productData.id);

            if (existingCartItemIndex !== -1) {
                cartJson[existingCartItemIndex].quantity -= 1; // Decrease the quantity of the specific item

                // Remove the item from the array if quantity becomes 0
                if (cartJson[existingCartItemIndex].quantity === 0) {
                    cartJson.splice(existingCartItemIndex, 1);
                }

                let cartString = JSON.stringify(cartJson);
                localStorage.setItem('cartData', cartString);

                // Recalculate cartItemCount by summing up quantities in cartJson
                let totalCount = cartJson.reduce((total, item) => total + item.quantity, 0);
                setCartItemCount(totalCount);
            }

            if (cartItemCount === 1) {
                setCartButtonClickStatus(false);
            }
            // setCartData(cartJson)
        }
    };



    const cartRemoverButtonHandler = (action) => {
        setCartItemCount(0); // Set cartItemCount to 0
        setCartButtonClickStatus(false);
        removeFromCart(product_id);
        localStorage.removeItem('cartData');
    };


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
                        {!cartButtonClickStatus ?
                            (<button className=" btn btn-primary" onClick={cartAddButtonHandler}>+
                                Add to Cart</button>)
                            :
                            <div className="d-flex align-items-center flex-row" style={{gap: ".5rem"}}>
                                <button onClick={cartAddButtonHandler} className="btn  btn-primary">+
                                </button>
                                <div>
                                    <span className="fs-3">{cartItemCount} </span> in cart
                                </div>
                                <button className="btn  btn-primary" onClick={cartRemoveButtonHandler}>-
                                </button>
                                <button className="btn btn-danger" onClick={cartRemoverButtonHandler}><i
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

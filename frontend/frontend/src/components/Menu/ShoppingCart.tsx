import {Offcanvas, Stack} from "react-bootstrap";
// @ts-ignore
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
// @ts-ignore
import {CartItem} from "./CartItem.tsx";
import {Link} from "react-router-dom";
// @ts-ignore
import {formatCurrencyIR} from "../../utilities/formatCurrency.ts";
// @ts-ignore
import storeItems from '../../data/items.json'
import Cookies from 'js-cookie';
import {useEffect} from "react";

export function ShoppingCart({isOpen}) {
    const {closeCart, cartItems} = useShoppingCart(); // Destructure the function returned by useShoppingCart
    // Function to save cart items to a cookie
    const saveCartItemsToCookie = (cartItems) => {
        Cookies.set('cartItems', JSON.stringify(cartItems));
    };

    // Function to send cart items to the server
    const sendCartItemsToServer = (cartItems, userId) => {
        const url = 'http://127.0.0.1:8000/API/MarketPlace/carts/';
        const data = {
            quantity: cartItems.map(item => item.quantity),
            user: 2, // Assuming userId is available in your context or state
            food_item: cartItems.map(item => item.id)
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send cart items to the server.');
                }
                // Handle successful response
            })
            .catch(error => {
                console.error('Error sending cart items to server:', error);
            });
    };

    useEffect(() => {
        // Save cart items to cookie when the cart items change
        saveCartItemsToCookie(cartItems);
    }, [cartItems]);

    // Assuming userId is available in your context or state
    const userId = 2; // Example user ID

    // Call sendCartItemsToServer when the component mounts or when the user goes to checkout
    useEffect(() => {
        sendCartItemsToServer(cartItems, userId);
    }, [userId]); // You can adjust the dependencies based on your application logic

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    Shopping Cart
                </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-blod fs-5">
                        Total{' '}
                        {formatCurrencyIR(cartItems.reduce((total, cartItems) => {
                                const item = storeItems.find(i => i.id === cartItems.id)
                                return total + (item?.price || 0) * cartItems.quantity
                            }, 0)
                        )}
                    </div>
                </Stack>
                <button className="btn btn-success float-end"><Link className="text-light" to='/checkout'> Go to
                    CheckOut</Link></button>
            </Offcanvas.Body>
        </Offcanvas>
    );
}

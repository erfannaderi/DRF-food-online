import Header from "./components/includes/Header";
import React from 'react';
import Footer from "./components/includes/Footer"
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Categories from "./components/Menu/Categories";
import './App.css';
import FoodItems from "./components/Menu/FoodItems";
import AllProductsList from "./components/Menu/AllProductsList";
import ProductDetail from "./components/includes/ProductDetail";
import Checkout from "./components/orders/Checkout";
import CustomerRegister from "./components/accounts/CustomerRegister";
import Login from "./components/accounts/Login";
import Dashboard from "./components/accounts/Dashboard";
import Orders from "./components/orders/Orders";
import OrderSuccessPage from "./components/orders/OrderSuccessPage";
import OrderFaliurePage from "./components/orders/OrderFaliurePage";
import ChangePassword from "./components/accounts/ChangePassword";
import Profile from "./components/accounts/Profile";
import AddressList from "./components/accounts/AddressList";
import AddressDetail from "./components/accounts/AddressDetail";
import AddAddress from "./components/accounts/AddAddress";
const dotenv = require('dotenv')
const buf = Buffer.from('BASIC=basic')
const config = dotenv.parse(buf) // will return an object
console.log(typeof config, config) // object { BASIC : 'basic' }
function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/category/:category_slug/:category_id" element={<FoodItems/>}/>
                <Route path="/products" element={<AllProductsList/>}/>
                <Route path="/product/:cproduct_slug/:productid" element={<ProductDetail/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/customer/register" element={<CustomerRegister/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/customer/dashboard" element={<Dashboard/>}/>
                <Route path="/customer/orders" element={<Orders/>}/>
                <Route path="/customer/change-password" element={<ChangePassword/>}/>
                <Route path="/customer/profile" element={<Profile/>}/>
                <Route path="/customer/address-list" element={<AddressList/>}/>
                <Route path="/customer/add-address" element={<AddAddress/>}/>
                <Route path="/customer/address/:address_id" element={<AddressDetail/>}/>
                <Route path="/order/success" element={<OrderSuccessPage/>}/>
                <Route path="/order/faliure" element={<OrderFaliurePage/>}/>
            </Routes>
            <Footer/>

        </>
    );
}

export default App;

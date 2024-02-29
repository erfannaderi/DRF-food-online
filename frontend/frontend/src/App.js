import Header from "./components/includes/Header";
import React from 'react';
import Footer from "./components/includes/Footer"
import Home from "./components/Home";
import {Routes, Route} from "react-router-dom";
import Categories from "./components/Menu/Categories";
import './App.css';
import FoodItems from "./components/Menu/FoodItems";
import AllProductsList from "./components/Menu/AllProductsList";
import ProductDetail from "./components/Menu/ProductDetail";
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
import SellerRegister from "./components/vendor/SellerRegister";
import SellerLogin from "./components/vendor/SellerLogin";
import SellerDashboard from "./components/vendor/SellerDashboard";
import SellerProducts from "./components/vendor/SellerProducts";
import AddProduct from "./components/vendor/AddProduct";
import SellerOrders from "./components/vendor/SellerOrders";
import Customers from "./components/vendor/Customers";
import Reports from "./components/vendor/Reports";
import SellerProfile from "./components/vendor/SellerProfile";
import SellerChangePassword from "./components/vendor/SellerChangePassword";
import Logout from "./components/accounts/Logout";
import OtpVerf from "./components/accounts/OtpVerf";
import CustomerLogin from "./components/accounts/CustomerLogin";
import { Store } from "./pages/Store.tsx";
import { About } from "./pages/About.tsx";
import {ShoppingCartProvider} from "./context/ShoppingCartContext.tsx";
import {CartContext} from "./context/Context";

const checkCart=localStorage.getItem("cartData");
function App() {
    const [cartData, setCartData] = React.useState(JSON.parse(checkCart));
    return (
        <>
            <CartContext.Provider value={{cartData, setCartData}}>
            <ShoppingCartProvider>
            <Header/>
            <Routes>
                {/*main pages*/}
                <Route path="/" element={<Home/>}/>
                <Route path="/store" element={<Store/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/categories" element={<Categories/>}/>
                <Route path="/category/:category_slug/:category_id/" element={<FoodItems/>}/>
                <Route path="/products" element={<AllProductsList/>}/>
                <Route path="/product/:product_slug/:product_id" element={<ProductDetail/>}/>
                {/*customers*/}
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="/customer/register" element={<CustomerRegister/>}/>
                <Route path="/customer/otp" element={<OtpVerf/>}/>
                <Route path="/customer/login-2" element={<CustomerLogin/>}/>
                <Route path="/customer/login" element={<Login/>}/>
                <Route path="/customer/logout" element={<Logout/>}/>
                <Route path="/customer/dashboard" element={<Dashboard/>}/>
                <Route path="/customer/orders" element={<Orders/>}/>
                <Route path="/customer/change-password" element={<ChangePassword/>}/>
                <Route path="/customer/profile" element={<Profile/>}/>
                <Route path="/customer/address-list" element={<AddressList/>}/>
                <Route path="/customer/add-address" element={<AddAddress/>}/>
                <Route path="/customer/address/:address_id" element={<AddressDetail/>}/>
                {/*orders*/}
                <Route path="/order/success" element={<OrderSuccessPage/>}/>
                <Route path="/order/faliure" element={<OrderFaliurePage/>}/>
                {/*seller*/}
                <Route path="/seller/dashboard/" element={<SellerDashboard/>}/>
                <Route path="/seller/register/" element={<SellerRegister/>}/>
                <Route path="/seller/login/" element={<SellerLogin/>}/>
                <Route path="/seller/orders/" element={<Orders/>}/>
                <Route path="/seller/products/" element={<SellerProducts/>}/>
                <Route path="/seller/profile/" element={<Profile/>}/>
                <Route path="/seller/address-list/" element={<AddressList/>}/>
                <Route path="/seller/add-address" element={<AddAddress/>}/>
                <Route path="/seller/address/:address_id" element={<AddressDetail/>}/>
                <Route path="/seller/product/add" element={<AddProduct/>}/>
                <Route path="/seller/orders/" element={<SellerOrders/>}/>
                <Route path="/seller/customers/" element={<Customers/>}/>
                <Route path="/seller/reports/" element={<Reports/>}/>
                <Route path="/seller/profile/" element={<SellerProfile/>}/>
                <Route path="/seller/change-password/" element={<SellerChangePassword/>}/>
            </Routes>
            <Footer/>
            </ShoppingCartProvider>
            </CartContext.Provider>

        </>
    );
}

export default App;

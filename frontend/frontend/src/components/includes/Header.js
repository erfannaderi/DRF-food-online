import {useLocation} from "react-router-dom";
import React, {useState} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import {useShoppingCart} from "../../context/ShoppingCartContext.tsx";
import {useContext} from "react";
import {CartContext, UserContext} from "../../context/Context";

export default function App(props) {
    const userContext = useContext(UserContext);
    const{cartData,setCartData}=useContext(CartContext);
    const [openBasic, setOpenBasic] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const handleCustomerAccountHover = () => {
        setIsHovered(true);
    };

    const handleCustomerAccountMouseLeave = () => {
        setIsHovered(false);
    };

    const handleSellerPanelHover = () => {
        setIsHovered(true);
    };

    const handleSellerPanelMouseLeave = () => {
        setIsHovered(false);
    };


    const isActive = (path) => {
        return location.pathname === path;
    };
    const {openCart,cartQuantity} = useShoppingCart()

    return (
        <MDBNavbar expand='lg' light bgColor='success'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <MDBIcon><i className="fa-sharp fa-solid fa-pot-food fa-beat fa-2xl" style={{ color: "#63E6EB", marginRight: "3px" }}></i></MDBIcon>
                    Maktab Polo
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className='justify-content-end'>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active={isActive('/')} href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active={isActive('/about')} href='/about'>
                                About
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active={isActive('/store')} href='/store'>
                                Store
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem style={{marginRight: '28rem'}}>
                            <MDBNavbarLink active={isActive('/categories')}  href='/categories'>Categories</MDBNavbarLink>
                        </MDBNavbarItem>
                        {/*href='/checkout'*/}
                        <MDBNavbarLink  onClick={openCart} style={{marginRight: "5px"}}>
                            My Cart <i className="fa-duotone fa-cart-plus"></i>
                            <span className="cart-count">{cartQuantity}</span>
                        </MDBNavbarLink>
                        <MDBNavbarLink href='/checkout' style={{marginRight: "5px"}}>
                            New Orders <i className="fa-duotone fa-cart-plus"></i>
                            {/*{cartData.length}*/}
                                <span className="cart-count">0</span>
                        </MDBNavbarLink>
                        <MDBNavbarItem  id="customer-accounts"
                            onMouseEnter={handleCustomerAccountHover} onMouseLeave={handleCustomerAccountMouseLeave}>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button' style={{marginRight:"2rem"}}>
                                    Customer Account
                                    {isHovered ? <MDBIcon icon='user-circle' className='ms-1' fas/> : null}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link href='/customer/register'>
                                        {isActive('/customer/register') ?
                                            <MDBIcon> <i
                                                className="fa-sharp fa-regular fa-id-card fa-bounce fa-2x"
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i></MDBIcon> :
                                            <MDBIcon icon='pot-food'
                                                     style={{
                                                         color: "#5cb85c",
                                                         marginRight: "3px"
                                                     }}
                                                     fas/>}
                                        {isActive('/') ?
                                            <MDBIcon icon='user-plus' style={{color: "#5cb85c", marginRight: "3px"}}
                                                     fas/> : null}
                                        Register
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link href='/customer/login'>
                                        {isActive('/customer/login') ?
                                            <MDBIcon> <i
                                                className="fa-sharp fa-light fa-right-to-bracket fa-beat"
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon> :
                                            <MDBIcon className='ms-1' fas> <i
                                                className="fa-sharp fa-light fa-right-to-bracket "
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>}
                                        {isActive('/customer/register') ?
                                            <MDBIcon icon='user-plus' style={{color: "#5cb85c", marginRight: "3px"}}
                                                     fas/> : null}
                                        Login
                                    </MDBDropdownItem>
                                    <MDBDropdownItem className='dropdown-divider'></MDBDropdownItem>
                                    <MDBDropdownItem link href='/customer/dashboard'>Dashboard</MDBDropdownItem>
                                    <MDBDropdownItem link href='/customer/logout'>Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                        <MDBNavbarItem id='seller-accounts' onMouseEnter={handleSellerPanelHover} onMouseLeave={handleSellerPanelMouseLeave}>
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Seller Panel
                                    {isHovered ? <MDBIcon icon='truck-utensils' className='ms-1 r2d2-icon' fas
                                                          style={{color: "#f5f5f5", marginRight: "3px"}}/> : null}
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link href='/seller/register'>
                                        {isActive('/seller/register') ?
                                            <MDBIcon> <i
                                                className="fa-sharp fa-regular fa-id-card fa-bounce fa-2x"
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i></MDBIcon> :
                                            <MDBIcon icon='money-bill-trend-up'
                                                     style={{
                                                         color: "#5cb85c",
                                                         marginRight: "3px"
                                                     }}
                                                     fas/>}
                                        {isActive('/') ?
                                            <MDBIcon icon='user-plus' style={{color: "#5cb85c", marginRight: "3px"}}
                                                     fas/> : null}
                                        Register
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link href='/seller/login'>
                                        {isActive('/seller/login') ?
                                            <MDBIcon> <i
                                                className="fa-sharp fa-light fa-right-to-bracket fa-beat"
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon> :
                                            <MDBIcon className='ms-1' fas> <i
                                                className="fa-sharp fa-light fa-right-to-bracket "
                                                style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>}
                                        {isActive('/seller/register') ?
                                            <MDBIcon icon='user-plus' style={{color: "#5cb85c", marginRight: "3px"}}
                                                     fas/> : null}
                                        Login
                                    </MDBDropdownItem>
                                    <MDBDropdownItem className='dropdown-divider'></MDBDropdownItem>
                                    <MDBDropdownItem link href='/seller/dashboard'>Dashboard</MDBDropdownItem>
                                    <MDBDropdownItem link href='/seller/logout'>Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

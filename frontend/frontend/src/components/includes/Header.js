import {Link, useLocation} from "react-router-dom";
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
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
    const [openBasic, setOpenBasic] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <MDBNavbar expand='lg' light bgColor='success'>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/'>
                    <MDBIcon> <i className="fa-sharp fa-solid fa-pot-food fa-beat fa-2xl"
                        style={{color: "#63E6EB", marginRight: "3px"}}></i> </MDBIcon>
                Maktab Polo</MDBNavbarBrand>

            <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenBasic(!openBasic)}
                >
                    <MDBIcon icon='bars' fas/>
                </MDBNavbarToggler>

                <MDBCollapse navbar open={openBasic} className='d-flex input-group w-auto'>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active={isActive('/')} href='/'>
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='/categories'>Categories</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarLink href='/checkout'>My Cart (5)</MDBNavbarLink>
                        <MDBNavbarItem
                            onMouseEnter={handleHover}
                            onMouseLeave={handleMouseLeave}
                        >
                            <MDBDropdown>
                                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                    Account
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
                                    <MDBDropdownItem link href='/login'>
                                        {isActive('/login') ?
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
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

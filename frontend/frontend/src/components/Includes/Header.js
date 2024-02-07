import logo from "../../foodOnlineLogo.png";
import {Link} from "react-router-dom";

function Header() {
    return (
        <div className="wrapper">
            {/* <!-- Header Start -->*/}
            <header id="header">
                <div className="main-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                <div className="logo">
                                    <figure>
                                        <Link to="/" className="light-logo">
                                            <img src={logo} alt="online_food_logo"
                                                 width="250"/>
                                        </Link>

                                    </figure>
                                </div>
                                <div className="main-nav">
                                    <nav id="site-navigation" className="main-navigation">
                                        <ul>
                                            <li>
                                                <a href="#">Demos</a>
                                                <ul>
                                                    <li><a href="#">Food Bakery</a></li>
                                                    <li><a href="#">Mexican Restaurant</a>
                                                    </li>
                                                    <li><a href="#">Food Stop</a></li>
                                                    <li><a href="#">Rtl Demo</a></li>
                                                    <li><a href="#">Food Court</a></li>
                                                    <li><a href="#">Single Restaurant Demo</a>
                                                    </li>
                                                </ul>
                                                {/* <!--End Sub Menu -->*/}
                                                {/*<!--End Sub Menu --> */}
                                            </li>
                                            <li><a href="#">Restaurants</a></li>
                                            <li>
                                                <a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="price-plans.html">Price Plans</a></li>
                                                    <li><a href="how-it-works.html">How it works</a></li>
                                                    <li><a href="faq.html">FAQ’s</a></li>
                                                    <li><a href="404.html">404</a></li>
                                                    <li><a href="search-result.html">Search Result</a></li>
                                                    <li><a href="contact-us.html">Contact</a></li>
                                                </ul>
                                                {/*    <!--End Sub Menu -->*/}
                                            </li>
                                            <li>
                                                <a href="#">Blogs</a>
                                                <ul>
                                                    <li><a href="blog-large.html">Blog Large</a></li>
                                                    <li><a href="blog-medium.html">Blog Medium</a></li>
                                                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                                                    <li><a href="blog-detail.html">Blog Detail Page</a></li>
                                                </ul>
                                                {/*    <!--End Sub Menu -->*/}
                                            </li>
                                        </ul>
                                    </nav>
                                    {/*    <!-- .main-navigation -->*/}
                                </div>

                                <div className="main-location">
                                    <ul>
                                        <li className="location-has-children choose-location">
                                            <form action="#">
                                                <input type="text" value="" name="location"
                                                       placeholder="Enter your delivery location"
                                                       autoComplete="off"/>
                                                <span id="foodbakery_radius_location_open"
                                                      className="foodbakery-radius-location">
                                                        <i className="icon-target5"></i></span>
                                            </form>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <div className="login-option"
                                     style={{display: 'flex', justifyContent: 'space-between'}}>
                                    {/*{% if request.user.is_authenticated %}*/}
                                    {/*<div class="cart-container">*/}
                                    {/*    <a href="{% url 'cart_view' %}" class="cart-icon"*/}
                                    {/*       style="position: relative; display: inline-block; margin-top: 30px; margin-right: 30px; scale: 1.4;">*/}
                                    {/*        <i class="fa fa-shopping-cart text-danger"></i>*/}
                                    {/*        <span class="badge badge-dark" id="cart_counter"*/}
                                    {/*              style="position: absolute; top: -13px; right: -13px; min-width: 20px; height: 20px; padding: 4px; border-radius: 50%; text-align: center; font-size: 12px;">*/}
                                    {/*    {{ cart_counter }}*/}
                                    {/*</span>*/}
                                    {/*    </a>*/}
                                    {/*</div>*/}
                                    {/*<a href="{% url 'market_place' %}"*/}
                                    {/*   class="btn btn-outline-danger text-uppercase font-weight-bold"*/}
                                    {/*   style="margin-top: 22px;">Market Place</a>*/}
                                    {/*<a class="cs-color cs-popup-joinus-btn login-popup btn btn-danger p-2 text-light"*/}
                                    {/*   href="{% url 'logout' %}">Logout </a>*/}
                                    {/*<a class="cs-color cs-popup-joinus-btn login-popup btn btn-danger p-2 text-light"*/}
                                    {/*   href="{% url 'my_account' %}">{{ user.username }} </a>*/}
                                    {/*{% else %}*/}
                                    <Link to="/Market-place/Listing"
                                       className="btn btn-outline-danger text-uppercase font-weight-bold"
                                       style={{marginTop: '22px'}}>Market Place</Link>
                                    <a className="cs-color cs-popup-joinus-btn login-popup btn btn-danger p-2 text-light"
                                       href="#">Login</a>
                                    <a href="#"
                                       className="cs-color cs-popup-joinus-btn login-popup btn btn-danger p-2 text-light"
                                       style={{marginRight: '10px'}}> Register</a>
                                    <span> <a className="get-start-btn center btn btn-danger p-2 text-light"
                                              style={{marginTop: '22px'}} href="#">Register Restaurant</a></span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;
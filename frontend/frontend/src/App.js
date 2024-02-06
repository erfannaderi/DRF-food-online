import logo from './foodOnlineLogo.png'
// import food_logo from '../public/logo/foodOnlineLogo.png'
// import pic_web from '../public/logo/favicon.png'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <>
            <div className="wrapper">
                {/* <!-- Header Start -->*/}
                <header id="header">
                    <div className="main-header">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                    <div className="logo">
                                        <figure>
                                            <a href="#" className="light-logo">
                                                <img src={logo} alt="online_food_logo"
                                                     width="250"/>
                                            </a>

                                        </figure>
                                    </div>
                                    <div className="main-nav">
                                        <nav id="site-navigation" className="main-navigation">
                                            <ul>
                                                <li>
                                                    <a href="#">Demos</a>
                                                    <ul>
                                                        <li><a href="index.html">Food Bakery</a></li>
                                                        <li><a href="mexican-restaurant.html">Mexican Restaurant</a>
                                                        </li>
                                                        <li><a href="foodstop.html">Food Stop</a></li>
                                                        <li><a href="rtl.html">Rtl Demo</a></li>
                                                        <li><a href="food-cout.html">Food Court</a></li>
                                                        <li><a href="single-restaurant.html">Single Restaurant Demo</a>
                                                        </li>
                                                    </ul>
                                                    {/* <!--End Sub Menu -->*/}
                                                    {/*<!--End Sub Menu --> */}
                                                </li>
                                                <li><a href="listings.html">Restaurants</a></li>
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
                                                           autocomplete="off"/>
                                                    <span id="foodbakery_radius_location_open"
                                                          className="foodbakery-radius-location"><i
                                                        className="icon-target5"></i></span>
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
                                        <a href="#"
                                           className="btn btn-outline-danger text-uppercase font-weight-bold"
                                           style={{marginTop: '22px'}}>Market Place</a>
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
            <main className="mt-4">
                <div className="container">
                    {/*latest product section*/}
                    <h2 className="mb-5">Latest Products <a href='#'
                                                            className="float-end btn btn-sm btn-danger text-white">
                        See Full List Products <i className="fa-solid fa-arrow-right-long"></i></a></h2>
                    <div className="row mb-4">
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/*    end latest products */}
                    {/*popular categories */}
                    <h2 className="mb-5 text-primary">Popular Categories <a href='#'
                                                                            className="float-end btn btn-sm btn-danger text-white ">
                        See Full List of Categories <i className="fa-solid fa-arrow-right-long"></i></a></h2>
                    <div className="row mb-4 ">
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Category Title</h4>
                                </div>
                                <div className="card-footer">
                                    Product sells : 244857
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Category Title</h4>
                                </div>
                                <div className="card-footer">
                                    Product sells : 244857
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Category Title</h4>
                                </div>
                                <div className="card-footer">
                                    Product sells : 244857
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Category Title</h4>
                                </div>
                                <div className="card-footer">
                                    Product sells : 244857
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/*    end popular categories */}
                    {/*Popular Products section*/}
                    <h2 className="mb-5 text-info">Popular Products <a href='#'
                                                                       className="float-end btn btn-sm btn-danger text-white ">
                        See Full List Products <i className="fa-solid fa-arrow-right-long"></i></a></h2>
                    <div className="row mb-4">
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Product Title</h4>
                                    <h5 className="card-body text-muted">Price: 300 hezar toman</h5>
                                </div>
                                <div className="card-footer">
                                    <button title="Add to Cart" className="btn btn-success btn-sm">
                                        <i className="fa-solid fa-cart-plus"></i>
                                    </button>
                                    <button title="Add to Wishlist" className="btn btn-danger btn-sm ms-1">
                                        <i className="fa fa-heart"></i>
                                    </button>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/*    end Popular Product */}
                    {/*popular Sellers */}
                    <h2 className="mb-5 text-success">Popular Sellers <a href='#'
                                                                         className="float-end btn btn-sm btn-danger text-white ">
                        See Full List of Sellers <i className="fa-solid fa-arrow-right-long"></i></a></h2>
                    <div className="row mb-4 ">
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Seller Name</h4>
                                </div>
                                <div className="card-footer">
                                    Categories : <a href="#">polo morgh</a>, <a href="#">polo khuresht</a>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Seller Name</h4>
                                </div>
                                <div className="card-footer">
                                    Categories : <a href="#">polo morgh</a>, <a href="#">polo khuresht</a>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Seller Name</h4>
                                </div>
                                <div className="card-footer">
                                    Categories : <a href="#">polo morgh</a>, <a href="#">polo khuresht</a>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                        <div className="col-12 col-md-3 mb-4">
                            <div className="card">
                                <img className="card-img-top" src={logo} alt="Card image cap"/>
                                <div className="card-body">
                                    <h4 className="card-title">Seller Name</h4>
                                </div>
                                <div className="card-footer">
                                    Categories : <a href="#">polo morgh</a>, <a href="#">polo khuresht</a>
                                </div>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    {/*    end popular Sellers */}
                    {/*  rating  */}
                    <div id="carouselExampleIndicators"
                         className="carousel slide my-4 border bg-dark text-white p-5"
                         data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                    aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                    aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <i className="fa fa-star text-warning"></i> <cite title="Source Title">Customer
                                        Name</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="carousel-item">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <i className="fa fa-star"></i> <cite title="Source Title">Customer
                                        Name</cite>
                                    </figcaption>
                                </figure>
                            </div>
                            <div className="carousel-item">
                                <figure className="text-center">
                                    <blockquote className="blockquote">
                                        <p>A well-known quote, contained in a blockquote element.</p>
                                    </blockquote>
                                    <figcaption className="blockquote-footer">
                                        <i className="fa fa-star"></i> <cite title="Source Title">Customer
                                        Name</cite>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                                data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/*  ratings end  */}
                    {/*// <!-- Footer Start -->*/}
                    <footer id="footer" className="footer-style-2">
                        <div className="footer-widget">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="widget widget-newsletter">
                                            <div className="widget-title">
                                                <h5>Subscribe to our Newsletter</h5>
                                            </div>
                                            <div className="fieldset">
                                                <form action="#">
                                                    <div className="field-holder">
                                                        <label>
                                                            <i className=" icon-envelope3"></i>
                                                            <input type="text" className="field-input"
                                                                   placeholder=" Enter Your Email Address..."/>
                                                        </label>
                                                    </div>
                                                    <div className="field-holder btn-holder">
                                                        <input className="subscribe-btn bgcolor" type="submit"
                                                               value="Sign Up"/>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-sec">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="copyright-inner">
                                            <div className="copy-right">
                                                <p>© 2020 Foodbakery. All Rights Reserved. Developed By <a href="#">Erfan
                                                    Naderi</a>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                    {/*<!-- Footer End -->   */}
                </div>
            </main>
        </>
    );
}

export default App;

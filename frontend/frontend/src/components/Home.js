import logo from "../foodOnlineLogo.png";
import Cart from "./marketplace/Cart";

function Home() {
    return (
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
                <div className="carousel-item" id="mmd">
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
    </div>
</main>
    )
}

export default Home;
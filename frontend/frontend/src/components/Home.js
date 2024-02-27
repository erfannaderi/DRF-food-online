import logo from "../logo.jpg";
import Carousels from "./includes/Carousels";
import React, {useRef, useEffect} from "react";
import {Link} from "react-router-dom";
import FoodItem from "./Menu/FoodItem";
import VideoBg from "./includes/VideoBg";
import B_roll from "../assets/B-Roll Vidéo Restaurant - Food vidéo - La Promenade.mp4"

export default function Home() {
    const videoRef = useRef(null);
    const products=[
        {'food_title':"maktab polo 1",
        "price": 87},
        {'food_title':"maktab polo 2",
        "price": 87},
        {'food_title':"maktab polo 3",
        "price": 87}
    ]


    const showVideoInPinMode = () => {
        const video = videoRef.current;
        video.style.display = 'block';
        video.play();
    };

    useEffect(() => {
        const video = videoRef.current;

        // Play the video
        video.play();

        // Pin the video
        video.style.position = 'fixed';
        video.style.top = '80%';
        video.style.left = '85%';
        video.style.transform = 'translate(-50%, -50%)';
        video.style.zIndex = '9999';
    }, []);
    return (
        <main className="mt-4 ">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                style={{
                    display: 'block',
                    width: '50%',
                    top : '0',
                    minWidth: '200px', // Set a minimum width for the video
                    maxWidth: '400px', // Set a maximum width for the video
                }}
            >
                <source src={B_roll} type="video/mp4"/>
            </video>
            <div className="container-fluid">
                {/*latest product section*/}
                <h3 className="mb-4">Latest Products <Link to="/products" className="float-end btn  btn-dark ">View
                    all products
                    <span> <i className="fa-sharp fa-solid fa-arrow-right-long fa-fade"></i></span></Link></h3>
                <div className="row mb-4">
                    {products.map((product, index) => (
                        <FoodItem key={index} product={product}/>
                    ))}
                    {/*<FoodItem title='polomorgh1'/>*/}
                    {/*<FoodItem title='polomorgh2'/>*/}
                    {/*<FoodItem title='polomorgh3'/>*/}
                    {/*<FoodItem title='polomorgh4'/>*/}
                </div>
                {/*latest product end list*/}
                {/*popular categories*/}
                <h3 className="mb-4">Popular Categories <Link to="/categories" className="float-end btn  btn-dark ">View
                    all Categories
                    <span> <i className="fa-sharp fa-solid fa-arrow-right-long fa-fade"></i></span></Link></h3>
                <div className="row mb-4">
                    {/*Category box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className="card-footer">
                                Products Sells : 200
                            </div>
                        </div>
                    </div>
                    {/*end of Category box*/}
                    {/*Category box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className="card-footer">
                                Products Sells : 200
                            </div>
                        </div>
                    </div>
                    {/*end of Category box*/}
                    {/*Category box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className="card-footer">
                                Products Sells : 200
                            </div>
                        </div>
                    </div>
                    {/*end of Category box*/}
                    {/*Category box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Category title</h4>
                            </div>
                            <div className="card-footer">
                                Products Sells : 200
                            </div>
                        </div>
                    </div>
                    {/*end of Category box*/}
                </div>
                {/*end of popular categories*/}
                {/*popular product section*/}
                <h3 className="mb-4">Popular Products <a href="#" className="float-end btn  btn-dark ">View
                    all products
                    <span> <i className="fa-sharp fa-solid fa-arrow-right-long fa-fade"></i></span></a></h3>
                <div className="row mb-4">
                    {/*productbox*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Food title</h4>
                                <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                            </div>
                            <div className="card-footer">
                                <button title="Add to Car" className="btn btn-sm btn-success">
                                    <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                                <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                    <i className="fa-solid fa-heart fa-1.2x "></i></button>
                            </div>
                        </div>
                    </div>
                    {/*end of productbox*/}
                    {/*productbox*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Food title</h4>
                                <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                            </div>
                            <div className="card-footer">
                                <button title="Add to Car" className="btn btn-sm btn-success">
                                    <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                                <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                    <i className="fa-solid fa-heart fa-1.2x "></i></button>
                            </div>
                        </div>
                    </div>
                    {/*end of productbox*/}
                    {/*productbox*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Food title</h4>
                                <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                            </div>
                            <div className="card-footer">
                                <button title="Add to Car" className="btn btn-sm btn-success">
                                    <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                                <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                    <i className="fa-solid fa-heart fa-1.2x "></i></button>
                            </div>
                        </div>
                    </div>
                    {/*end of productbox*/}
                    {/*productbox*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Food title</h4>
                                <h5 className="card-title text-muted">Price: 500 hezar toman</h5>
                            </div>
                            <div className="card-footer">
                                <button title="Add to Car" className="btn btn-sm btn-success">
                                    <i className="fa-solid fa-cart-plus fa-1.2x "></i></button>
                                <button title="Add to Wishlist" className="btn btn-sm btn-danger ms-1">
                                    <i className="fa-solid fa-heart fa-1.2x "></i></button>
                            </div>
                        </div>
                    </div>
                    {/*end of productbox*/}
                </div>
                {/*popular product end list*/}
                {/*popular seller*/}
                <h3 className="mb-4">Popular Sellers <a href="#" className="float-end btn  btn-dark ">View
                    all Sellers
                    <span> <i className="fa-sharp fa-solid fa-arrow-right-long fa-fade"></i></span></a></h3>
                <div className="row mb-4">
                    {/*Sellers box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Sellers Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories Sells : <a href="#">burger</a>, <a href="#">pizza</a>
                            </div>
                        </div>
                    </div>
                    {/*end of Sellers box*/}
                    {/*Sellers box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Sellers Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories Sells : <a href="#">burger</a>, <a href="#">pizza</a>
                            </div>
                        </div>
                    </div>
                    {/*end of Sellers box*/}
                    {/*Sellers box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Sellers Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories Sells : <a href="#">burger</a>, <a href="#">pizza</a>
                            </div>
                        </div>
                    </div>
                    {/*end of Sellers box*/}
                    {/*Sellers box*/}
                    <div className="col-12 col-md-3 mb-4">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={logo} className="card-img-top" alt="logo"/>
                            <div className="card-body">
                                <h4 className="card-title">Sellers Name</h4>
                            </div>
                            <div className="card-footer">
                                Categories Sells : <a href="#">burger</a>, <a href="#">pizza</a>
                            </div>
                        </div>
                    </div>
                    {/*end of Sellers box*/}
                </div>
                {/* end of popular sellers*/}
                <Carousels/>
                {/*End*/}
            </div>
        </main>
    );
}

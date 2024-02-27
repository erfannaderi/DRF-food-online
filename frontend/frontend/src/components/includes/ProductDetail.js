//packages
import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
//assets
import logo from "../../logo.jpg";
import '../../App.css';

export default function ProductDetail(props) {
    const {product_id} = useParams()
    const  baseUrl='http://127.0.0.1:8000/API/Menu'
    const [ProductData, setProductsData] = useState([]);
    useEffect(() => {
        fetchData(baseUrl+'/fooditems/'+product_id);
    },[product_id]);
    function fetchData(baseurl) {
        fetch(baseurl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log(data.result); // Check the structure of data
                setProductsData(data.result); // Update state with fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
    return (
        <section className="container product-detail mt-4">
            <div className="row">
                <div className="col-4">
                    <img src={logo} className="img-thumbnail" alt="product logo"/>
                </div>
                <div className='col-8'>
                    <h3>{ProductData.food_title}</h3>
                    <p>The Hainanese chicken rice is a dish that consists of succulent poached white chicken cut into
                        bite-size pieces and served on fragrant rice with some light soy sauce. The dish is topped with
                        sprigs of coriander leaf and sesame oil, and accompanied by a garlic-chilli dip.</p>
                    <h5 className="card-title">price : 500 hezar toman</h5>
                    <p className="mt-3">
                        <button title="Add to Cart" className="btn btn-success">
                            <i className="fa-solid fa-cart-plus fa-1.2x "></i><span>  Add to Cart  </span>
                        </button>
                        <button title="Add to Wishlist" className="btn  ms-1 btn-danger ms-1">
                            <i className="fa-solid fa-heart fa-1.2x "></i><span>  Wishlist  </span>
                        </button>
                        <button title="Buy Now" className="btn  ms-1 btn-dark">
                            <i className="fa-solid fa-bag-shopping  fa-1.2x fa-bounce "></i><span>  Buy Now  </span>
                        </button>
                    </p>
                    <hr className="w-75" style={{background: "linear-gradient(#e66465, #9198e5);" }}/>
                    <div className="producttags">
                        <h5 className="mt-3">Tags</h5>
                    <p >
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Polo</Link>
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">morgh</Link>
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Qaza Irani</Link>
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Polo</Link>
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">morgh</Link>
                        <Link to="*" className="bage rounded-3 p-1 bg-secondary text-white me-1">Qaza Irani</Link>
                    </p>
                    </div>
                </div>
            </div>
            {/*realated product section*/}
            {/*    22*/}
            {/*end related product section*/}
        </section>
    );
}
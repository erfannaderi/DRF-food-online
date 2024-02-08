import logo from "../extra-images/bg-image1.jpg";
import Cart from "./marketplace/Cart";
// this below is for hooks if you use functional components if classes use life cycle hooks ig but so far we're doing func
import {useState, useEffect} from "react";

function Home() {


    const [vendors, setVendors] = useState([]);
    const [nextPage, setNextPage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const url = 'http://127.0.0.1:8000/API/Vendor/vendors/';

            try {
                const response = await fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                        // Add any additional headers if required
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }

                const data = await response.json();
                setVendors(data.result);
                setNextPage(data.links.next);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const fetchNextPage = async (nextPageUrl) => {
        try {
            const response = await fetch(nextPageUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                    // Add any additional headers if required
                }
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            setVendors((prevVendors) => [...prevVendors, ...data.result]);
            setNextPage(data.links.next);
        } catch (error) {
            console.error('Error fetching next page:', error);
        }
    };

    return (
        <main classsName="mt-4">

            {/*<!--Main Wrapper-->*/}

            {/*<!-- Header End -->*/}
            {/*<!-- Main Section Start -->*/}
            <div className="main-section">
                {/*// <!-- Home Pages Elements Strat -->*/}
                {/*// <!-- Main Search Start -->*/}
                <div className="page-section nopadding cs-nomargin"
                     style={{
                         paddingTop: '200px',
                         paddingBottom: '150px',
                         marginBottom: '0px',
                         background: `url(${logo}) no-repeat center / cover`
                     }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <div className="element-title">
                                    <h1 style={{
                                        fontSize: '40px',
                                        color: '#505050',
                                        textTransform: 'uppercase',
                                        lineHeight: '50px',
                                        marginBottom: '25px',
                                        textAlign: 'center'
                                    }}>We are in the business of food<br/>our restaurants do</h1>
                                    <p style={{
                                        fontSize: '18px',
                                        letterSpacing: '1px',
                                        color: '#505050',
                                        textAlign: 'center'
                                    }}>
                                        Ridiculus sociosqu
                                        cursus neque cursus curae ante scelerisque vehicula.</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                                <div className="main-search fancy bg-holder">
                                    <form action="#" method="GET">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-3 col-xs-12">
                                                <div className="field-holder">
                                                    <input type="text" name="keyword" placeholder="Resturant name"/>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                                                <div className="field-holder">
                                                    <ul>
                                                        <li className="select-location">
                                                            <div
                                                                className="foodbakery-locations-fields-group foodbakery-focus-out">
                                                        <span className="foodbakery-search-location-icon"><i
                                                            className="icon-location"></i></span>
                                                                <input type="text" name="address"
                                                                       className="location-field-text filter"
                                                                       placeholder="All Locations" id="id_address"/>
                                                            </div>
                                                            <input type="hidden" name="lat" value="" id="id_latitude"/>
                                                            <input type="hidden" name="lng" value=""
                                                                   id="id_longitude"/>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                <select name="radius" id="radius"
                                                        style={{
                                                            height: '50px',
                                                            color: 'rebeccapurple'
                                                        }}>
                                                    <option value="" selected>CHOOSE RADIUS</option>
                                                    <option value="5" selected> 5km</option>
                                                    <option value="10" selected> 10km</option>
                                                    <option value="15" selected> 15km</option>
                                                    <option value="20" selected> 20km</option>
                                                    <option value="25" selected> 25km</option>
                                                    <option value="50" selected> 50km</option>
                                                    <option value="100" selected> 100km</option>
                                                    <option value="200" selected> 200km</option>
                                                </select>
                                            </div>
                                            <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                                                <div className="field-holder">
                                                    <input type="submit" value="Search"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*// <!-- Main Search End -->*/}
                {/*//*/}
                {/*// // <!-- Top Restarurants Section Start -->*/}
                <div className="page-section nopadding cs-nomargin"
                     style={{
                         marginTop: '0px',
                         paddingTop: '60px',
                         paddingBottom: '0px',
                         marginBottom: '0px',
                         background: '#ffffff'
                     }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="element-title align-left">
                                    <h2>Top Restaurants</h2>
                                    <p>Explore restaurants, bars, and cafés by locality</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                                 style={{
                                     paddingLeft: '0 !important',
                                     paddingRight: '0 !important'
                                 }}>
                                <div>
                                    <ul>
                                        {vendors.map((vendor) => (
                                            <li key={vendor.id} className="has-border">
                                                <figure>
                                                    <a href="#">
                                                        <img
                                                            src={vendor.restaurant_picture}
                                                            className="attachment-full size-full wp-post-image"
                                                            alt=""
                                                        />
                                                    </a>
                                                </figure>
                                            </li>
                                        ))}
                                    </ul>

                                    {nextPage && (
                                        <button onClick={() => fetchNextPage(nextPage)}>Load More</button>
                                    )}
                                </div>
                                <div className="company-logo">
                                    {/*<ul>*/}
                                    {/*    {% if vendors %}*/}
                                    {/*    {% for vendor in vendors %}*/}
                                    {/*    <li className="has-border">*/}
                                    {/*        <figure>*/}
                                    {/*            {% if vendor.user_profile.profile_picture %}*/}
                                    {/*            <a href="{% url 'restaurant-dashboard' %}"><img*/}
                                    {/*                src="{{ vendor.user_profile.profile_picture.url }}"*/}
                                    {/*                className="attachment-full size-full wp-post-image"*/}
                                    {/*                alt=""></a>*/}
                                    {/*            {% else %}*/}
                                    {/*            <li className="has-border">*/}
                                    {/*                <figure>*/}
                                    {/*                    <a href="{% url 'homepage' %}"><img*/}
                                    {/*                        src="{% static 'extra-images/listing-logo18.png' %}"*/}
                                    {/*                        className="attachment-full size-full wp-post-image"*/}
                                    {/*                        alt=""></a>*/}
                                    {/*                </figure>*/}
                                    {/*            </li>*/}
                                    {/*            {% endif %}*/}
                                    {/*        </figure>*/}
                                    {/*    </li>*/}
                                    {/*    {% endfor %}*/}
                                    {/*    {% else %}*/}
                                    {/*    <li className="has-border">*/}
                                    {/*        <figure>*/}
                                    {/*            <a href="#"><img src="{% static 'extra-images/listing-logo18.png' %}"*/}
                                    {/*                             className="attachment-full size-full wp-post-image"*/}
                                    {/*                             alt=""></a>*/}
                                    {/*        </figure>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="has-border">*/}
                                    {/*        <figure>*/}
                                    {/*            <a href="#"><img src="{% static 'extra-images/fb-restaurant-02.jpg' %}"*/}
                                    {/*                             className="attachment-full size-full wp-post-image"*/}
                                    {/*                             alt=""></a>*/}
                                    {/*        </figure>*/}
                                    {/*    </li>*/}
                                    {/*    <li className="has-border">*/}
                                    {/*        <figure>*/}
                                    {/*            <a href="#"><img src="{% static 'extra-images/fb-restaurant-02.jpg' %}"*/}
                                    {/*                             className="attachment-full size-full wp-post-image"*/}
                                    {/*                             alt=""></a>*/}
                                    {/*        </figure>*/}
                                    {/*    </li>*/}
                                    {/*    {% endif %}*/}
                                    {/*</ul>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Top Restarurants Section End -->*/}
                {/*// <!-- Choose From Most Popular Listin Start -->*/}
                <div className="page-section nopadding cs-nomargin"
                     style={{
                         marginTop: '0px',
                         paddingTop: '60px',
                         paddingBottom: '50px',
                         marginBottom: '0px',
                         background: '#ffffff'
                     }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="element-title align-center">
                                    <h2>Choose From Most Popular Restaurants</h2>
                                    <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="listing fancy">
                                    <ul className="row">
                                        {/*{% if vendors %}*/}
                                        {/*{% for vendor in vendors %}*/}
                                        <li className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                            <div className="list-post featured">
                                                <div className="img-holder">
                                                    <figure><a href="#">
                                                        <figure><a href="#">
                                                            {/*{% if vendor.user_profile.profile_picture %}*/}

                                                            {/*<img*/}
                                                            {/*    src="{{ vendor.user_profile.profile_picture.url }}"*/}
                                                            {/*    className="img-thumb wp-post-image" alt="">*/}
                                                            {/*    <img*/}
                                                            {/*        src="{% static 'extra-images/listing-logo18.png' %}"*/}
                                                            {/*        className="attachment-full size-full wp-post-image"*/}
                                                            {/*        alt="profile pic">*/}
                                                            {/*        {% endif %}*/}
                                                        </a>
                                                        </figure>
                                                    </a>
                                                    </figure>
                                                    <span className="restaurant-status close">
													<em className="bookmarkRibbon"></em>Close
												</span>
                                                </div>
                                                <div className="text-holder">
                                                    <div className="post-title">
                                                        <h5>
                                                            <a href="listing-detail.html">Vendor</a>
                                                        </h5>
                                                    </div>
                                                    {/*{% if vendor.user_profile.city and vendor.user_profile.state %}*/}
                                                    {/*<address><span>address</span>*/}
                                                    {/*    {{vendor.user_profile.city}},{{vendor.user_profile.state}}*/}
                                                    {/*</address>*/}
                                                    {/*{% endif %}*/}
                                                </div>

                                            </div>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*// <!-- Choose From Most Popular Listing End -->*/}

                {/*// <!-- Home Pages Elements End  -->*/}
            </div>
            {/*// <!-- Main Section End -->*/}
            {/*// <!-- Modal Popup End -->*/}
        </main>
    )
}

export default Home;
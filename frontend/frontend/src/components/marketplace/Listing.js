import {Link} from "react-router-dom";

function Listing() {
    return (
        <div className="main-section">
            <div className="page-section nopadding cs-nomargin"
                 style={{marginTop: 0, paddingTop: '60px', paddingBottom: '10px', marginBottom: 0}}>
                <Link to="/Market-place/Detail/py/1">Details</Link>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <aside className="col-lg-2 col-md-2 col-sm-12 col-xs-12">

                                </aside>
                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                                    <div className="listing-sorting-holder">
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                <h4>vendors_counter Restaurant's found</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="listing simple">
                                        {/*<ul>*/}
                                        {/*    /!*{% if vendors %}*!/*/}
                                        {/*    /!*{% for vendor in vendors %}*!/*/}
                                        {/*    <li style="line-height: 15px;">*/}
                                        {/*        <div className="img-holder">*/}
                                        {/*            <figure>*/}
                                        {/*                <a href="#">*/}
                                        {/*                    {% if vendor.user_profile.profile_picture %}*/}
                                        {/*                    <img src="{{ vendor.user_profile.profile_picture.url}}"*/}
                                        {/*                         className="img-list wp-post-image" alt="profile picture">*/}
                                        {/*                        {% else %}*/}
                                        {/*                        <img src="{% static 'images/default-profile.PNG' %}"*/}
                                        {/*                             className="img-list wp-post-image"*/}
                                        {/*                             alt="profile picture">*/}
                                        {/*                            {% endif %}*/}
                                        {/*                </a>*/}
                                        {/*            </figure>*/}
                                        {/*            <span className="restaurant-status close"><em*/}
                                        {/*                className="bookmarkRibbon"></em>Close</span>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="text-holder">*/}
                                        {/*            <div className="post-title">*/}
                                        {/*                <h5>*/}
                                        {/*                    <a href="{% url 'restaurant_detail_view' vendor.vendor_slug%}">{{vendor}}</a>*/}
                                        {/*                </h5>*/}
                                        {/*            </div>*/}
                                        {/*            <span><small>{{vendor.user_profile.address}}</small></span>*/}
                                        {/*            <span className="post-categories"><span>Address:*/}
                                        {/*				</span>{{vendor.user_profile.address}} </span>*/}

                                        {/*        </div>*/}
                                        {/*        <div className="list-option">*/}

                                        {/*            <a href="{% url 'restaurant_detail_view' vendor.vendor_slug %}"*/}
                                        {/*               className="viewmenu-btn text-color">View Menu</a>*/}
                                        {/*        </div>*/}
                                        {/*    </li>*/}
                                        {/*    {% endfor %}*/}
                                        {/*    {% endif %}*/}
                                        {/*</ul>*/}
                                    </div>

                                </div>
                                <div className="section-sidebar col-lg-3 col-md-3 col-sm-12 col-xs-12">
                                    <div className="message-box" style={{backgroundColor: '#fa9918'}}>
                                        <strong>I'm not Listed!</strong><span> is your restaurant or
											business not
											listed on over site</span>
                                        {/*<a href="{% url 'register_restaurant' %}" className="request-btn">Add Your*/}
                                        {/*    business!</a>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    )
}

export default Listing;
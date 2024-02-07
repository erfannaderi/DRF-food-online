import logo from "../../foodOnlineLogo.png";
// import {Link} from "react-router-dom";
import ClientSideBar from "../Includes/ClientSideBar";

function ClientDashboard() {
    return (

        <div className="main-section">
            <div className="page-section restaurant-detail-image-section"
                 style={{
                     background: `url(${logo}) no-repeat scroll 0 0 / cover`
                 }}>
                {/*// <!-- Container Start -->*/}
                <div className="container">
                    {/*// <!-- Row Start -->*/}
                    <div className="row">
                        {/*// <!-- Column Start -->*/}
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="company-info-detail">
                                <div className="company-info">
                                    <div className="img-holder">
                                        <figure>
                                            <img src={logo} alt=""/>
                                        </figure>
                                    </div>

                                    <div className="text-holder">
                                        <span className="restaurant-title">first Name - last name</span>
                                        <div className="text">
                                            <i className="icon-location">mmd</i>
                                            <p>Phone number</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*// <!-- Column End -->*/}
                    </div>
                    {/*// <!-- Row End -->*/}
                </div>
                {/*// <!-- Container End -->*/}
            </div>
            <div className="page-section account-header buyer-logged-in">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            <ClientSideBar/>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="user-dashboard loader-holder">
                                <div className="user-holder">
                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <div className="row">
                                            <div className="element-title has-border right-filters-row">
                                                <h5>Recent Orders</h5>
                                                <div className="right-filters row pull-right">
                                                    <div className="col-lg-6 col-md-6 col-xs-6">
                                                        <div className="input-field">
                                                            <select className="chosen-select-no-single">
                                                                <option selected="selected" value="">Select Orders
                                                                    Status
                                                                </option>
                                                                <option value="Processing">Processing</option>
                                                                <option value="Cancelled">Cancelled</option>
                                                                <option value="Completed">Completed</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div className="user-orders-list">
                                                <div className="responsive-table">
                                                    <ul className="table-generic">
                                                        <li className="order-heading-titles">
                                                            <div>Order id</div>
                                                            <div>Date</div>
                                                            <div>Total Price</div>
                                                            <div>Charges</div>
                                                            <div>Received</div>
                                                            <div>Status</div>
                                                        </li>
                                                        <li className="order-heading-titles">
                                                            <div><a href="#" data-toggle="modal"
                                                                    data-target="#order-det-22606">order-22606</a></div>
                                                            <div>Apr 9,2020</div>
                                                            <div>£ 38.99</div>
                                                            <div>£ 3.90</div>
                                                            <div>£ 35.09</div>
                                                            <div><span className="order-status"
                                                                       style={{backgroundColor: '#047a06'}}>Completed</span>
                                                            </div>
                                                        </li>


                                                        <li className="order-heading-titles">
                                                            <div><a href="#" data-toggle="modal"
                                                                    data-target="#order-det-22606">order-22583</a></div>
                                                            <div>Apr 9,2020</div>
                                                            <div>£ 26.22</div>
                                                            <div>£ 2.62</div>
                                                            <div>£ 23.60</div>
                                                            <div><span className="order-status"
                                                                       style={{backgroundColor: '#1e73be'}}>Processing</span>
                                                            </div>
                                                        </li>
                                                        <li className="order-heading-titles">
                                                            <div><a href="#" data-toggle="modal"
                                                                    data-target="#order-det-22606">order-22493</a></div>
                                                            <div>Apr 2,2020</div>
                                                            <div>£ 28.24</div>
                                                            <div>£ 2.82</div>
                                                            <div>£ 25.42</div>
                                                            <div><span className="order-status"
                                                                       style={{backgroundColor: '#047a06'}}>Completed</span>
                                                            </div>
                                                        </li>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientDashboard;
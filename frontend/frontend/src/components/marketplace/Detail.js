import {Link} from "react-router-dom";
import Cart from './Cart'

function Detail() {
    return (
        <div className="row mb-4">
            <Cart title="django"/>
            <div aria-label="Page navigation example">
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
            </div>
        </div>
        // <div className="main-section">
        //     <div className="page-section restaurant-detail-image-section"
        //          {% if vendor.user_profile.cover_photos %}
        //          style=" background: url({{ vendor.user_profile.cover_photos.url }}) no-repeat scroll 0 0 / cover;">
        //         {% else %}
        //         style=" background: url({% static 'images/default-cover.PNG' %}) no-repeat scroll 0 0 / cover;">
        //         {% endif %}
        //         <!-- Container Start -->
        //         <div className="container">
        //             <!-- Row Start -->
        //             <div className="row">
        //                 <!-- Column Start -->
        //                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
        //                     <div className="company-info-detail">
        //                         <div className="company-info">
        //                             <div className="img-holder">
        //                                 <figure>
        //                                     {% if vendor.user_profile.cover_photos %}
        //                                     <img src="{{ vendor.user_profile.profile_picture.url }}" alt="profile pic">
        //                                         {% else %}
        //                                         <img src="{% static 'images/default-profile.PNG' %}" alt="profile pic">
        //                                             {% endif %}
        //                                 </figure>
        //                             </div>
        //                             <div className="text-holder">
        //                                 <span className="restaurant-title">{{ vendor }}</span>
        //                                 <div className="text">
        //                                     {% if vendor.user_profile.address %}
        //                                     <i className="icon-location"></i>
        //                                     <p> first address:{{ vendor.user_profile.address }}</p>
        //                                     {% endif %}
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className="delivery-timing reviews-sortby">
        //
        //                             <ul>
        //                                 <li>
        //                                     <a href="#" className="reviews-sortby-active">
        //                                         <span>Today :</span>
        //                                         11:00 am - 11:00 pm <i className="icon-chevron-small-down"></i>
        //                                     </a>
        //                                     <ul className="delivery-dropdown">
        //                                         <li><a href="#"><span className="opend-day">Monday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am - 11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Tuesday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am - 11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Wednesday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am - 11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Thursday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am—11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Friday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am - 11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Saturday</span> <span
        //                                             className="opend-time"><small>:</small> 11:00 am - 11:00
        // 															pm</span></a></li>
        //                                         <li><a href="#"><span className="opend-day">Sunday</span> <span
        //                                             className="opend-time close-day"><small>:</small>Closed</span></a>
        //                                         </li>
        //                                     </ul>
        //                                 </li>
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <!-- Column End -->
        //             </div>
        //             <!-- Row End -->
        //         </div>
        //         <!-- Container End -->
        //     </div>
        //
        //     <div className="page-section">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12 sticky-sidebar">
        //                     <div className="filter-wrapper">
        //                         <div className="categories-menu">
        //                             <h6><i className="icon-restaurant_menu"></i>Categories</h6>
        //                             <ul className="menu-list">
        //                                 {% if categories %}
        //                                 {% for category in categories %}
        //                                 <li className="active"><a href="#"
        //                                                       className="menu-category-link"> {{ category }} </a></li>
        //                                 {% endfor %}
        //                                 {% endif %}
        //                             </ul>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-lg-9 col-md-9 col-sm-8 col-xs-12">
        //                     <div className="tabs-holder horizontal">
        //                         <ul className="stickynav-tabs nav nav-tabs">
        //                             <li className="active"><a data-toggle="tab" href="#home"><i
        //                                 className="icon- icon-room_service"></i>Menu</a></li>
        //                             {% if categories %}
        //                             {% for category in categories %}
        //                         </ul>
        //                         <div className="tab-content">
        //                             <div id="home" className="tab-pane in active">
        //                                 <div className="menu-itam-holder">
        //
        //                                     <div id="menu-itam-list-6272" className="menu-itam-list">
        //
        //                                         <div className="element-title" id="menu-category-2">
        //                                             <h5 className="text-color">{{ category }}</h5>
        //                                             <span>{{ category.description }}</span>
        //                                         </div>
        //                                         <br>
        //                                             <ul>
        //                                                 {% for food_item in category.fooditems.all %}
        //                                                 <li>
        //                                                     <div className="image-holder"
        //                                                          style="width: 50px; height: 50px; overflow: hidden;">
        //                                                         {% if food_item.image %}
        //                                                         <img src="{{ food_item.image.url }}" alt="food picture"
        //                                                              style="width: 100%; height: 100%; object-fit: cover;">
        //                                                             {% endif %}
        //                                                     </div>
        //                                                     <div className="text-holder">
        //                                                         <h6>{{ food_item }}</h6>
        //                                                         <span>{{ food_item.description }}</span>
        //                                                     </div>
        //                                                     <div className="price-holder">
        //                                                         <span className="price">{{ food_item.price }} هزار تومان </span>
        //                                                         <a href="{% url 'delete_cart' food_item.pk %}" className=
        //                                                             "delete-cart" data-id="{{ food_item.pk }}"
        //                                                            data-url="{% url 'delete_cart' food_item.pk %}">
        //                                                             <i className="icon-delete text-color"></i></a>
        //                                                         <a href="#" className="decrease-cart" style="margin-right: 28px;"
        //                                                            data-id="{{ food_item.pk }}"
        //                                                            data-url="{% url 'decrease_cart' food_item.pk %}"><i
        //                                                             className="icon-minus3 text-color"></i></a>
        //                                                         <label id="qty-{{ food_item.pk }}">0</label>
        //                                                         <a href="{% url 'add_to_cart' food_item.pk %}" className=
        //                                                             "add-to-cart" data-id="{{ food_item.pk }}"
        //                                                            data-url="{% url 'add_to_cart' food_item.pk %}">
        //                                                             <i className="icon-plus4 text-color"></i></a>
        //                                                     </div>
        //                                                 </li>
        //                                                 {% endfor %}
        //                                             </ul>
        //                                             {% endfor %}
        //                                             {% endif %}
        //                                     </div>
        //                                     {% for item in cart_items %}
        //                                     <span className="items_qty d-none"
        //                                           id="qty-{{ item.food_item.pk }}"
        //                                           data-qty="{{ item.quantity }}">{{ item.quantity }}</span>
        //                                     {% endfor %}
        //                                 </div>
        //                             </div>
        //
        //                         </div>
        //                     </div>
        //                 </div>
        //
        //             </div>
        //         </div>
        //     </div>
        // </div>


    )
}

export default Detail;
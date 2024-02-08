import logo from "../../foodOnlineLogo.png";
import {Link} from "react-router-dom";

function RegisterClient(props) {
    return (

        // <!-- Main Section Start -->
        <div className="main-section">
            <div className="page-section nopadding cs-nomargin"
                 style={{marginTop: '0px', paddingTop: '60px', paddingBottom: '60px', marginBottom: '0px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                            <div className="user-dashboard loader-holder">
                                <div className="user-holder">
                                    <h4 className="text-center" style={{marginBottom: '0px'}}>WELCOME TO FOODONLINE</h4>
                                    <p className="text-center">Please fill this form to get yourself onboarded in the
                                        foodOnline
                                        marketplace.</p>
                                    <hr/>
                                    <div id="restaurant-sets-holder">
                                        <form className="form-fields-set foodbakery-dev-restaurant-form" method="POST"
                                              action="{% url 'register_client' %}">
                                            {/*{% csrf_token %}*/}
                                            <ul className="register-add-restaurant-tab-container restaurant-information-tab-container">
                                                <li>
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="row">
                                                                <ul>
                                                                    <li>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label
                                                                                    for='first_name'>Firstname</label>
                                                                                <input type='text' id='first_name'
                                                                                       placeholder='first_name'/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label for='last_name'>Last name</label>
                                                                                <input type='text' id='last_name'
                                                                                       placeholder='last_name'/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label for='email'>Email Address</label>
                                                                                <input type='email' id='email'
                                                                                       placeholder='email'/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label for='username'>Username</label>
                                                                                <input type='text' id='username'
                                                                                       placeholder='username'/>
                                                                            </div>
                                                                        </div>
                                                                    </li>

                                                                    <li>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label for='password'>Password</label>
                                                                                <input type='password' id='password'
                                                                                       placeholder='password'/>
                                                                            </div>
                                                                        </div>
                                                                        <div
                                                                            className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                                                            <div className="field-holder">
                                                                                <label for='confirm_password'>Confirm
                                                                                    Password</label>
                                                                                <input type='password'
                                                                                       id='confirm_password'
                                                                                       placeholder='confirm_password'/>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    {/*<ul className="error-list">*/}
                                                    {/*    {% for field in form %}*/}
                                                    {/*    {% if field.errors %}*/}
                                                    {/*    {% for error in field.errors %}*/}
                                                    {/*    <li className="error" style="color: red">{{ error }}</li>*/}
                                                    {/*    {% endfor %}*/}

                                                    {/*    {% endif %}*/}
                                                    {/*    {% endfor %}*/}
                                                    {/*    <li className="error"*/}
                                                    {/*        style="color: red">{{ form.non_field_errors }}</li>*/}
                                                    {/*</ul>*/}
                                                    <div className="row">
                                                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            <div className="field-holder">
                                                                <div className="payment-holder">
                                                                    <input type="submit" value="Submit"
                                                                           id="btn-next-restaurant-information"
                                                                           className="bgcolor"/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </form>
                                        {/*{% include 'includes/alerts.html' %}*/}
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

export default RegisterClient;
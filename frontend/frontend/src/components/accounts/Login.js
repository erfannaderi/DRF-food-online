import logo from "../../foodOnlineLogo.png";
import {Link} from "react-router-dom";

function Login() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card my-5">
                        <div className="card-body">
                            <h2 className="text-center mb-4">Log in to your account</h2>
                            <form method="POST" noValidate>
                                <div className="row">
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div className="field-holder">
                                            <label htmlFor='email'>Email Address</label>
                                            <input type='email' id='email'
                                                   placeholder='email'/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div
                                        className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <div className="field-holder">
                                            <label htmlFor='password'>Password</label>
                                            <input type='password' id='password'
                                                   placeholder='password'/>
                                        </div>
                                    </div>
                                </div>
                                {/*{% csrf_token %}*/}
                                {/*{% for field in form %}*/}
                                {/*<div className="form-group">*/}
                                {/*    {{field.label_tag}}*/}
                                {/*    {{field}}*/}
                                {/*    {% if field.errors %}*/}
                                {/*    <small className="text-danger">{{field.errors | striptags}}</small>*/}
                                {/*    {% endif %}*/}
                                {/*</div>*/}
                                {/*{% endfor %}*/}
                                <button type="submit" className="btn btn-primary  mt-4">Login</button>
                                <a href="#" className=" btn text-light bg-dark float-right">Forgot Password</a>
                            </form>
                            {/*<ul className="error-list">*/}
                            {/*    {% for field in form %}*/}
                            {/*    {% if field.errors %}*/}
                            {/*    {% for error in field.errors %}*/}
                            {/*    <li className="error" style="color: red">{{error}}</li>*/}
                            {/*    {% endfor %}*/}

                            {/*    {% endif %}*/}
                            {/*    {% endfor %}*/}
                            {/*    <li className="error"*/}
                            {/*        style="color: red">{{form.non_field_errors}}</li>*/}
                            {/*</ul>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
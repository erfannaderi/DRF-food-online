import React from 'react';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";
import '../../App.css';
import Paginations from "../includes/Paginations";


export default function Categories() {
    return (
        <section className="container categories">
            {/*all categories*/}
            <h3 className="mb-4">All Categories </h3>
            <div className="row mb-2">
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="/category/mmd/1">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
            </div>
            <div className="row mb-2">
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
                {/*Category box*/}
                <div className="col-12 col-md-3 mb-4">
                    <div className="custom-card card" style={{width: "18rem"}}>
                        <img src={logo} className="card-img-top" alt="logo"/>
                        <div className="card-body">
                            <h4 className="card-title"><Link to="#">Category title</Link></h4>
                        </div>
                        <div className="card-footer">
                            Products Sells : 200
                        </div>
                    </div>
                </div>
                {/*end of Category box*/}
            </div>
            {/*end of all categories*/}
            <Paginations/>
        </section>
    );
}
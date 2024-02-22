import React from 'react';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";


export default function OrderFaliurePage(props) {
    return (
        <div className="container mt-4">
            <div className="card text-center">
                <div className="card-header">Failed Please Try Again or Contact Customer Services <span><Link to="/">HELP</Link></span></div>
                <div className="card-body"><i className="fa fa-exclamation-circle fa-10x fa-beat-fade m-auto text-danger"></i> </div>
            </div>
        </div>
    );
}
import React from 'react';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";


export default function OrderSuccessPage(props) {
    return (
        <div className="container mt-4">
            <div className="card text-center">
                <div className="card-header">Success</div>
                <div className="card-body"><i className="fa fa-check-circle fa-10x fa-bounce m-auto text-success"></i> </div>
            </div>
        </div>
    );
}
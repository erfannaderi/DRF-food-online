import React, {useEffect, useState} from 'react';
import logo from "../../logo.jpg";
import {Link} from "react-router-dom";
import '../../App.css';
import Paginations from "../includes/Paginations";
import {MDBIcon, MDBPagination, MDBPaginationItem, MDBPaginationLink} from "mdb-react-ui-kit";


export default function Categories() {
    const  baseUrl='http://127.0.0.1:8000/API/Menu'
    const [categories, setCategories] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    // const [baseurl, setBaseurl] = useState(baseUrl+'/fooditems/');

    useEffect(() => {
        fetchData(baseUrl+'/Categories/');
    },[currentPage]); // Empty dependency array to run the effect only once

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
                setCategories(data.result); // Update state with fetched data
                setTotalResult(data.count);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function ChangeUrl(pageNumber) {
        const url = `${baseUrl}/Categories/?page=${pageNumber}`;
        fetchData(url);
    }
    var links = [];

    for (let i = 1; i <= Math.ceil(totalResult / 4); i++) {
        links.push(<li className="page-item" key={i} active={i === currentPage}>
            <Link className="page-link" to="#" onClick={() => ChangeUrl(i)}>
                {i}
            </Link>
        </li>)
    }
    function goToPage(pageNumber) {
        setCurrentPage(pageNumber);
    }
    return (
        <section className="container categories">
            {/*all categories*/}
            <h3 className="mb-4">All Categories </h3>
            <div className="row mb-2">
                {/*Category box*/}
                {categories.map((category, index) => (
                    <div className="col-12 col-md-3 mb-4">
                        <div className="custom-card card" style={{width: "18rem"}}>
                            <img src={category.image} className="card-img-top" alt="category_name"/>
                            <div className="card-body">
                                <h4 className="card-title"><Link to={`/Category/${category.slug}/${category.id}/`}>{category.category_name}</Link></h4>
                            </div>
                            <div className="card-footer">
                                Products Sells : 200
                            </div>
                        </div>
                    </div>
                ))}
                {/*end of Category box*/}
            </div>
            {/*<div className="row mb-2">*/}
            {/*    /!*Category box*!/*/}
            {/*    <div className="col-12 col-md-3 mb-4">*/}
            {/*        <div className="custom-card card" style={{width: "18rem"}}>*/}
            {/*            <img src={logo} className="card-img-top" alt="logo"/>*/}
            {/*            <div className="card-body">*/}
            {/*                <h4 className="card-title"><Link to="#">Category title</Link></h4>*/}
            {/*            </div>*/}
            {/*            <div className="card-footer">*/}
            {/*                Products Sells : 200*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*end of Category box*!/*/}
            {/*    /!*Category box*!/*/}
            {/*    <div className="col-12 col-md-3 mb-4">*/}
            {/*        <div className="custom-card card" style={{width: "18rem"}}>*/}
            {/*            <img src={logo} className="card-img-top" alt="logo"/>*/}
            {/*            <div className="card-body">*/}
            {/*                <h4 className="card-title"><Link to="#">Category title</Link></h4>*/}
            {/*            </div>*/}
            {/*            <div className="card-footer">*/}
            {/*                Products Sells : 200*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*end of Category box*!/*/}
            {/*    /!*Category box*!/*/}
            {/*    <div className="col-12 col-md-3 mb-4">*/}
            {/*        <div className="custom-card card" style={{width: "18rem"}}>*/}
            {/*            <img src={logo} className="card-img-top" alt="logo"/>*/}
            {/*            <div className="card-body">*/}
            {/*                <h4 className="card-title"><Link to="#">Category title</Link></h4>*/}
            {/*            </div>*/}
            {/*            <div className="card-footer">*/}
            {/*                Products Sells : 200*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*end of Category box*!/*/}
            {/*    /!*Category box*!/*/}
            {/*    <div className="col-12 col-md-3 mb-4">*/}
            {/*        <div className="custom-card card" style={{width: "18rem"}}>*/}
            {/*            <img src={logo} className="card-img-top" alt="logo"/>*/}
            {/*            <div className="card-body">*/}
            {/*                <h4 className="card-title"><Link to="#">Category title</Link></h4>*/}
            {/*            </div>*/}
            {/*            <div className="card-footer">*/}
            {/*                Products Sells : 200*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*end of Category box*!/*/}
            {/*</div>*/}
            {/*end of all categories*/}
            <nav aria-label="Page navigation example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <MDBPagination className='mb-0'>
                            <MDBPaginationItem>
                                <MDBPaginationLink disabled={currentPage === 1}
                                                   onClick={() => goToPage(currentPage - 1)} tabIndex={-1}
                                                   aria-disabled='true'>
                                    <MDBIcon> <i
                                        className="fa-sharp fa-regular fa-t-rex fa-flip-horizontal fa-3x trex-icon"
                                        style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                            {links}
                            <MDBPaginationItem>
                                <MDBPaginationLink onClick={() => ChangeUrl(currentPage + 1)}>
                                    <MDBIcon>

                                        <i className="fa-sharp fa-regular fa-robot-astromech fa-animation-delay-1s fa-animation-duration-2s fa-animation-iteration-count-infinite fa-3x r2d2-icon "
                                           style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                        </MDBPagination>
                    </ul>
                </nav>
            </nav>
        </section>
    );
}
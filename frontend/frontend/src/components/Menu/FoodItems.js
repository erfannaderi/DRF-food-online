import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import '../../App.css';
import {useEffect, useState} from "react";
// import Paginations from "../includes/Paginations";
import FoodItem from "./FoodItem";
import {MDBIcon, MDBPagination, MDBPaginationItem, MDBPaginationLink} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";


export default function FoodItems() {
    const  baseUrl='http://127.0.0.1:8000/API/Menu'
    const [products, setProducts] = useState([]);
    const [totalResult, setTotalResult] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const {category_id} = useParams()
    // const [baseurl, setBaseurl] = useState(baseUrl+'/fooditems/');

    useEffect(() => {
        fetchData(baseUrl+'/fooditems/?category='+category_id);
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
                setProducts(data.result); // Update state with fetched data
                setTotalResult(data.count);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function ChangeUrl(pageNumber) {
        const url = `${baseUrl}/fooditems/?category=${category_id}&page=${pageNumber}`;
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
        <section className="container Category">
            <h3 className="mb-4"><span className="text-warning">Polo </span> Food Items</h3>
            {/*latest product section*/}
            <div className="row mb-4">
                {/*productbox*/}
                {products.map((product, index) => (
                    <FoodItem key={index} product={product}/>
                ))}
            </div>
            <nav aria-label="Page navigation example">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <MDBPagination className='mb-0'>
                            <MDBPaginationItem >
                                <MDBPaginationLink disabled={currentPage === 1} onClick={() => goToPage(currentPage - 1)} tabIndex={-1} aria-disabled='true'>
                                    <MDBIcon> <i
                                        className="fa-sharp fa-regular fa-t-rex fa-flip-horizontal fa-3x trex-icon"
                                        style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                            {links}
                            <MDBPaginationItem>
                                <MDBPaginationLink  onClick={() => ChangeUrl(currentPage + 1)}>
                                    <MDBIcon>

                                        <i className="fa-sharp fa-regular fa-robot-astromech fa-animation-delay-1s fa-animation-duration-2s fa-animation-iteration-count-infinite fa-3x r2d2-icon "
                                           style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>
                                </MDBPaginationLink>
                            </MDBPaginationItem>
                        </MDBPagination>
                    </ul>
                </nav>
            </nav>
            {/*latest product end list*/}

        </section>
    );
}
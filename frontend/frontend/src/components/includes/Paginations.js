import React from 'react';
import {MDBIcon, MDBPagination, MDBPaginationItem, MDBPaginationLink} from 'mdb-react-ui-kit';


export default function Paginations() {
    return (
            <MDBPagination className='mb-0'>
                <MDBPaginationItem disabled>
                    <MDBPaginationLink href='#' tabIndex={-1} aria-disabled='true'>
                        <MDBIcon> <i className="fa-sharp fa-regular fa-t-rex fa-flip-horizontal fa-3x trex-icon"
                                     style={{color: "#5cb85c", marginRight:"3px"}}></i> </MDBIcon>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>1</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem active aria-current='page'>
                    <MDBPaginationLink href='#'>
                        2 <span className='visually-hidden'>(current)</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>3</MDBPaginationLink>
                </MDBPaginationItem>
                <MDBPaginationItem>
                    <MDBPaginationLink href='#'>
                        <MDBIcon>

                            <i className="fa-sharp fa-regular fa-robot-astromech fa-animation-delay-1s fa-animation-duration-2s fa-animation-iteration-count-infinite fa-3x r2d2-icon "
                               style={{color: "#5cb85c", marginRight: "3px"}}></i> </MDBIcon>
                </MDBPaginationLink>
            </MDBPaginationItem>
            </MDBPagination>
    );
}
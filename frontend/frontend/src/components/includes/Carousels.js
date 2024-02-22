import React from 'react';
import {MDBCarousel, MDBCarouselCaption, MDBCarouselItem} from "mdb-react-ui-kit";

export default function Carousels() {
    return (

        <MDBCarousel showIndicators showControls fade interval={3000} className='bg-dark text-white'>
            <MDBCarouselItem itemId={1} interval={1000} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '240px' }}>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                <MDBCarouselCaption >
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '240px' }}>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                <MDBCarouselCaption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={3}  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '240px' }}>
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star fa-bounce text-warning "></i>
                        <i className="fa-sharp fa-solid fa-star-half fa-bounce text-warning"></i>
                        <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>
                <MDBCarouselCaption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </MDBCarouselCaption>
            </MDBCarouselItem>
        </MDBCarousel>

    );
}
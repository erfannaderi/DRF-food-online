import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import CustomerSidebar from "../includes/CustomerSidebar";

const AddressDetail = () => {
    const { id } = useParams();
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const fetchAddress = async () => {
            try {
                const response = await fetch(`http://your-backend-api-url/addresses/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setAddress(data);
                } else {
                    console.error('Failed to fetch address');
                }
            } catch (error) {
                console.error('Error fetching address:', error);
            }
        };

        fetchAddress();
    }, [id]);

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://your-backend-api-url/addresses/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // Handle successful deletion, e.g., navigate back to address list
            } else {
                console.error('Failed to delete address');
            }
        } catch (error) {
            console.error('Error deleting address:', error);
        }
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <CustomerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            {address && (
                                <div>
                                    <h2>Address Details</h2>
                                    <Card className="mb-3">
                                        <Card.Body>
                                            <Card.Title>{address.address}</Card.Title>
                                            <Card.Text>
                                                <strong>Country:</strong> {address.country}<br/>
                                                <strong>State:</strong> {address.state}<br/>
                                                <strong>City:</strong> {address.city}<br/>
                                                <strong>Pin Code:</strong> {address.pin_code}<br/>
                                                <strong>Latitude:</strong> {address.latitude}<br/>
                                                <strong>Longitude:</strong> {address.longitude}
                                            </Card.Text>
                                            <Button variant="primary" className="mr-2">Edit</Button>
                                            <Button variant="danger" onClick={handleDelete}>Delete</Button>
                                        </Card.Body>
                                    </Card>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddressDetail;

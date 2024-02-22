import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import CustomerSidebar from "../includes/CustomerSidebar";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../logo.jpg";

export default function ChangePassword() {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <CustomerSidebar/>
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='card'>
                                <div className='card-body text-center'>
                                    <Form>
                                        <h3>Change Password</h3>
                                        <Form.Group as={Row} className="mb-3" controlId="Password1">
                                            <Form.Label column sm={2}>
                                                New Password
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="password" placeholder="Password" className='w-50'/>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="Password2">
                                            <Form.Label column sm={2}>
                                                Confirm New Password
                                            </Form.Label>
                                            <Col sm={10}>
                                                <Form.Control type="password" placeholder="Password" className='w-50'/>
                                            </Col>
                                        </Form.Group>

                                        <Form.Group as={Row} className="mb-3">
                                            <Col sm={{span: 10, offset: 2}}>
                                                <Button type="submit">Change Password</Button>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
}
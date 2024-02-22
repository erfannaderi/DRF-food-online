import React from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import '../../App.css'

export default function CustomerRegister(props) {
    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Prevent default form submission behavior
    //     const formData = new FormData(e.target);
    //     // Process formData or send it to the server
    //     console.log(formData);}
    return (
        <div className='container mt-4 '>
            <div className='row '>
                <div className='col-md-8 col-12 offset-2'>
                    <div className='card'>
                        <h4 className='card-header mb-4 '>Register</h4>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="first_name" className="form-label">Last Name</label>
                                    <input type="text" className="form-control rounded-4" id="first_name" name="first_name" required />
                                    <label htmlFor="last_name" className="form-label">First Name</label>
                                    <input type="text" className="form-control rounded-4" id="last_name" name="last_name" required/>
                                    <label htmlFor="username" className="form-label">User Name</label>
                                    <input type="text" className="form-control rounded-4" id="username" name="username" required/>
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control rounded-4" id="email" name="email" required/>
                                    <div id="emailHelp" className="form-text">We'll never share your email with
                                        anyone else.
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-4" id="password" name="password" required/>
                                </div>
                                {/*<div className="mb-3 form-check">*/}
                                {/*    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>*/}
                                {/*    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>*/}
                                {/*</div>*/}
                                <button type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //     <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
        //         <div className='mask gradient-custom-3'></div>
        //         <MDBCard className='m-5 ' style={{maxWidth: '600px'}}>
        //             <MDBCardBody className='px-5'>
        //                 <h2 className="text-uppercase text-center mb-5">Create an account</h2>
        //                 <MDBInput wrapperClass='mb-4' label='Your First Name' size='lg' id='form1' type='text'/>
        //                 <MDBInput wrapperClass='mb-4' label='Your Last Name' size='lg' id='form2' type='text'/>
        //                 <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form3' type='email'/>
        //                 <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form4' type='password'/>
        //                 <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form5' type='password'/>
        //                 <div className='d-flex flex-row justify-content-center mb-4'>
        //                     <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
        //                 </div>
        //                 <MDBBtn className='mb-4 w-100 gradient-custom-4 bg-success' size='lg'>Register</MDBBtn>
        //             </MDBCardBody>
        //         </MDBCard>
        //     </MDBContainer>
    );
}


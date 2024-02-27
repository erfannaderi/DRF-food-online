import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import SellerSidebar from "../includes/SellerSidebar";

export default function SellerProfile() {
    const [sellerInfo, setSellerInfo] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        phone: '',
        profilePic: null
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSellerInfo({
            ...sellerInfo,
            [name]: value
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onload = () => {
                setSellerInfo({
                    ...sellerInfo,
                    profilePic: reader.result
                });
            };
            reader.readAsDataURL(file);
        } else {
            alert('Please select a valid image file.');
        }
    };

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-3 col-12 mb-2'>
                    <SellerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <form>
                                <MDBRow className='mb-4'>
                                    <MDBCol size='6'>
                                        <MDBInput label='First Name' id='firstName' name='firstName' value={sellerInfo.firstName} onChange={handleInputChange} autoComplete='given-name' />
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <MDBInput label='Last Name' id='lastName' name='lastName' value={sellerInfo.lastName} onChange={handleInputChange} autoComplete='family-name' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput label='Username' id='username' name='username' value={sellerInfo.username} onChange={handleInputChange} autoComplete='username' wrapperClass='mb-4' />
                                <MDBInput type='email' label='Email' id='email' name='email' value={sellerInfo.email} onChange={handleInputChange} autoComplete='email' wrapperClass='mb-4' />
                                <MDBInput type='tel' label='Phone' id='phone' name='phone' value={sellerInfo.phone} onChange={handleInputChange} autoComplete='tel' wrapperClass='mb-4' />

                                <div className='mb-4'>
                                    <label htmlFor='profilePic' className='form-label'>Profile Picture</label>
                                    <input type='file' id='profilePic' accept='image/*' onChange={handleFileChange} style={{ display: 'none' }} />
                                    <label htmlFor='profilePic' className='btn btn-primary'>
                                        Browse
                                    </label>
                                </div>

                                {sellerInfo.profilePic && (
                                    <div className='mt-3'>
                                        <img src={sellerInfo.profilePic} alt='Profile Picture' style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

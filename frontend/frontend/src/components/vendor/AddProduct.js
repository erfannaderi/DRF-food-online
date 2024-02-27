import React, { useState } from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import SellerSidebar from "../includes/SellerSidebar";

export default function AddProduct() {
    const [profilePic, setProfilePic] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type.includes('image')) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePic(reader.result);
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
                            <h4>Add Product</h4>
                            <form>
                                <MDBRow className='mb-4'>
                                    <MDBCol size='6'>
                                        <MDBInput label='Title' id='title' />
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <MDBInput type="number" label='Price' id='price' />
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <div className="form-group">
                                            <label htmlFor="category">Category</label>
                                            <select className="form-control" id="category">
                                                <option value="1">sdascf</option>
                                                <option value="2">Category 2</option>
                                                <option value="3">Category 3</option>
                                                {/* Add more categories as needed */}
                                            </select>
                                        </div>
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput label='Description' id='description' wrapperClass='mb-4' />

                                <label htmlFor='profilePic' className='form-label mb-2'>Product Picture</label>
                                <div className='mb-4'>
                                    <input type='file' id='profilePic' accept='image/*' onChange={handleFileChange} style={{ display: 'none' }} />
                                    <label htmlFor='profilePic' className='btn btn-primary'>
                                        Browse
                                    </label>
                                </div>

                                {profilePic && (
                                    <div className='mt-3'>
                                        <img src={profilePic} alt='Profile Picture' style={{ maxWidth: '200px', maxHeight: '200px' }} />
                                    </div>
                                )}

                                <MDBBtn color='primary'>Submit</MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

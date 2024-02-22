import React, {useState} from 'react';
import { MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import CustomerSidebar from "../includes/CustomerSidebar";

export default function Profile() {
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
                    <CustomerSidebar />
                </div>
                <div className='col-md-9 col-12 mb-2'>
                    <div className='card'>
                        <div className='card-body text-center'>
                            <form>
                                <MDBRow className='mb-4'>
                                    <MDBCol size='6'>
                                        <MDBInput label='First Name' id='firstName' />
                                    </MDBCol>
                                    <MDBCol size='6'>
                                        <MDBInput label='Last Name' id='lastName' />
                                    </MDBCol>
                                </MDBRow>

                                <MDBInput label='Username' id='username' wrapperClass='mb-4' />
                                <MDBInput type='email' label='Email' id='email' wrapperClass='mb-4' />
                                <MDBInput type='tel' label='Phone' id='phone' wrapperClass='mb-4' />

                                <label htmlFor='profilePic' className='form-label mb-2'>Profile Picture</label>
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
                                <MDBBtn type='submit' block color='primary'>
                                    Change Profile
                                </MDBBtn>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

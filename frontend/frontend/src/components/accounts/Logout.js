import React from 'react';

export default function Logout() {
    const handleLogout = () => {
        // Clear the JWT token from local storage
        localStorage.removeItem('jwtToken');
        localStorage.removeItem('customer_login');
        localStorage.removeItem('customer_email');
        const checkCustomer = localStorage.getItem('customer_login');
        if(checkCustomer){
            window.location.href= '/customer/logout';
        }

        // Clear the JWT token from cookies
        document.cookie = 'jwtToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

        // You can also clear any other user-related data here

        // Redirect the user to the login page or any other desired page
        window.location.href = "/customer/login"; // Redirect to the login page
    };

    return (
        <div className='container m-auto'>
            {handleLogout()}
            <h2>Logout Page</h2>
            {/*<button onClick={handleLogout}>Logout</button>*/}
        </div>
    );
}

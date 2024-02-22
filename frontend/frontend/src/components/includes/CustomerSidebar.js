import {Link} from "react-router-dom";

export default function App() {

    return (
        <ul className="list-group">
            <Link to="/customer/dashboard">
                <li className="list-group-item active" style={{color: "rebeccapurple"}} aria-current="true"><i
                    className="fa-sharp fa-solid fa-plate-utensils"
                    style={{color: "rebeccapurple", marginRight: "3px"}}></i>Dashboard
                </li>
            </Link>
            <Link to="/customer/profile">
                <li className="list-group-item text-primary"><i id="profile-user"
                                                                className="fa-duotone fa-user-vneck"></i>Profile
                </li>
            </Link>
            <Link to="/customer/orders">
                <li className="list-group-item " style={{color: "#ff6a00"}}><i
                    className="fa-sharp fa-regular fa-cart-shopping-fast"
                    style={{color: "#ff9900", marginRight: "2px"}}></i>Orders
                </li>
            </Link>
            <Link to="/customer/address-list">
                <li className="list-group-item " style={{color: "#00d0ff"}}><i
                    className="fa-sharp fa-light fa-map-location-dot"
                    style={{color: "#00d4ff", marginRight: "2px"}}></i>Addresses
                </li>
            </Link>
            <Link to="/">
                <li className="list-group-item text-danger"><i
                    className="fa-sharp fa-regular fa-head-side-heart fa-shake "
                    style={{color: "#c91818", marginRight: "2px"}}></i>Wishlist
                </li>
            </Link>
            <Link to="/customer/change-password">
                <li className="list-group-item"style={{color:"#ff00b7"}}><i className="fa-sharp fa-solid fa-lock"
                    style={{color: "#ff00b7", marginRight: "2px"}}></i>Change Password
                </li>
            </Link>
            <Link to="/">
                <li className="list-group-item text-muted"><i className="fa-sharp fa-thin fa-face-sad-sweat"
                                                              style={{color: "#667475", marginRight: "2px"}}></i>Logout
                </li>
            </Link>
        </ul>

    );
}
import logo from "../../foodOnlineLogo.png";
import { Link } from "react-router-dom";

function ClientSideBar() {
    return (
        <div className="user-account-nav user-account-sidebar">
            <div className="user-nav-list">
                <ul>
                    <li className="active"><Link to="/dashboard"><i className="icon-dashboard3"></i>Dashboard</Link></li>
                    <li><Link to="/orders"><i className="icon-add_shopping_cart"></i>My Orders</Link></li>
                    <li><Link to="/profile"><i className="icon-build"></i>Profile Settings</Link></li>
                    <li><Link to="/change-password"><i className="icon-unlock-alt"></i>Change Password</Link></li>
                    <li><Link to="/signout" className="logout-btn"><i className="icon-log-out"></i>Signout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default ClientSideBar;

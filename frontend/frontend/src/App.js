// App.js
// import logo from './foodOnlineLogo.png';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Includes/Header';
import Home from './components/Home';
import Footer from './components/Includes/Footer';
import Listing from './components/marketplace/Listing';
import Detail from './components/marketplace/Detail';
import RegisterClient from './components/accounts/RegisterClient';
import Login from './components/accounts/Login';
import ClientDashboard from './components/accounts/ClientDashboard';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Account/RegisterClient" element={<RegisterClient />} />
                <Route path="/Account/Login" element={<Login />} />
                <Route path="/Account/ClientDashboard" element={<ClientDashboard />} />
                <Route path="/Market-place/Listing" element={<Listing />} />
                <Route path="/Market-place/Detail/:Vendor_slug/:vendor_id" element={<Detail />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
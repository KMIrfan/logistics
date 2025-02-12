import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SideMenu from './components/side-menu/side-menu';
import Dashboard from './components/dashboard/dashboard';
import ViewOrder from './components/orders/view-order';
import Notification from './components/notifications/notification';
import Report from './components/reports/report';
import ViewUsers from './components/users/view-user';
import ViewVehicles from './components/vehicles/view-vehicle';
import MenuBar from './components/menu-bar/menu-bar';
import OrderDetails from './components/orders/order-details';
import ViewMap from './components/orders/view-map';
import Login from './components/login/login';
import React, { useState, useEffect } from 'react';

function Layout() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

useEffect(() => {
  const handleResize = () => {
    setIsSidebarOpen(window.innerWidth >= 968);
  };
  window.addEventListener("resize", handleResize);
  handleResize();
  return () => window.removeEventListener("resize", handleResize);
}, []);

  const location = useLocation();
  const isLoginPage = location.pathname === "/"; // Check if the current route is Login page  

  return (
    <div className='container-fluid bg-hash'>
      {!isLoginPage && ( // Conditionally render MenuBar if not on the login page
        <div className='row'>
          <div className='col-12 p-0'>
            <MenuBar />
          </div>
        </div>
      )}

      <div className="row">
        {!isLoginPage && ( // Sidebar should be fixed and take proper width
          <div className="col-md-3 p-0">
            <SideMenu />
          </div>
        )}
        
        <div className={`col-12 ${!isLoginPage ? "col-md-9" : ""} mt-5`}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/viewOrder" element={<ViewOrder />} />
            <Route path="/report" element={<Report />} />
            <Route path="/viewUsers" element={<ViewUsers />} />
            <Route path="/viewVehicles" element={<ViewVehicles />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/viewOrder/orderDetails/:id" element={<OrderDetails />} />
            <Route path="/viewOrder/orderDetails/viewMap" element={<ViewMap />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;

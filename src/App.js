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

function Layout() {
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

      <div className='row'>
        {!isLoginPage && ( // Conditionally render SideMenu if not on the login page
          <div className='col-3 p-0'>
            <SideMenu />
          </div>
        )}
        <div className={isLoginPage ? 'col-12 ' : 'col-md-9 col-12 mt-5'}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/viewOrder" element={<ViewOrder />} />
            <Route path="/report" element={<Report />} />
            <Route path="/viewUsers" element={<ViewUsers />} />
            <Route path="/viewVehicles" element={<ViewVehicles />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/viewOrder/orderDetails" element={<OrderDetails />} />
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

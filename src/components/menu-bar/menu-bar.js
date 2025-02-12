import React from 'react';
import './menu-bar.css'
import logo from '../../assets/images/logo-white-bg.png'

const menuBar = () => {
    return (
        <header className="bg-white d-flex flex-wrap justify-content-between align-items-center menu-bar-caontainer">
          <div className="d-flex align-items-center mx-2 ms-4 ms-md-0">
          <i className="fa fa-cart-arrow-down icon-color px-2" aria-hidden="true"></i>
            <img
              src={logo}
              alt="Company name"
              className="logoText"
            />
          </div>
          <div className="d-flex align-items-center mx-2">
            <i className="fa fa-bell-o icon-color px-3" aria-hidden="true"></i>
            <button className='btn btn-primary common-btn'>
              Log Out
            </button>
          </div>
        </header>
      );
    };
export default menuBar
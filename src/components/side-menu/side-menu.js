import React, { useState, useEffect } from 'react';
import './side-menu.css';
import { Link } from "react-router-dom";
import Profile from '../users/profile'
import { Modal } from "antd";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true); // Default open for desktop

  useEffect(() => {
    // Check screen width on load and resize
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false); // Hide menu on mobile by default
      } else {
        setIsOpen(true); // Show menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {

  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const menuItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/046a91175d79bb2466330646031d9a8ed287b5d72edc77f0da7e628be0b99c64', text: 'Dashboard', path: '/dashboard' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1de027de21f6c59bce0c7f33979ecf319d08546861766bcd30c07722ea5bea06', text: 'Orders', path: '/viewOrder' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d50b2fb994f301ee11be77577f3d70f054694d8146f138b49632b3dde3cf9', text: 'Reports', path: '/report' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d50b2fb994f301ee11be77577f3d70f054694d8146f138b49632b3dde3cf9', text: 'Users', path: '/viewUsers' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1e3d50b2fb994f301ee11be77577f3d70f054694d8146f138b49632b3dde3cf9', text: 'Vehicles', path: '/viewVehicles' },
  ];

  return (
    <>
      {/* Toggle Button (only for mobile) */}
      <button className="toggle-btn" onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Sidebar */}
      <nav className={`side-menu mt-5 ${isOpen ? 'open' : 'closed'}`} aria-label="Main Navigation">
        <div className="menu-items mt-4">
          {menuItems.map((item, index) => (
            <Link key={index} to={item.path} className="menu-item">
              <img src={item.icon} alt="" className="menu-icon" />
              <span className="menu-text">{item.text}</span>
            </Link>
          ))}
        </div>

        {/* User Profile at the Bottom */}
        <div className="user-profile rounded bg-white shadow-sm d-flex align-items-center gap-3 p-2 mb-5"  onClick={() => setIsModalOpen(true)}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b50ae374036dc20aebef377d4cbec2b2e5b7c6114feb222b30936e48ad18eff1" 
            alt="User avatar" 
            className="rounded-circle object-fit-contain" 
            style={{width: '74px', aspectRatio: '1'}} 
          />
          <div className="d-flex flex-column">
            <div className="fs-6 fw-bold">Full Name</div>
            <div className="fs-6 text-muted">Admin</div>
          </div>
        </div>
        <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <Profile />
          </Modal>
      </nav>
    </>
  );
};

export default SideMenu;
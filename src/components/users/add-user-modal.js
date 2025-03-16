import React, { useState } from "react";
import "./user.css";
import userService from "../../services/logistic-service";


const AddUserModal = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    mobile: "",
    whatsapp: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userService.addUser(formData); // API call
      console.log("User added successfully", response.data);
      alert("User added successfully!");
    } catch (error) {
      console.error("Error adding user:", error);
      alert("Failed to add user!");
    }
  };

  return (
    <div className="form-container">
      <h3>User Registration</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">User Name</label>
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter User Name"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Role</label>
            <select
              name="role"
              className="form-select"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">Select Role</option>
              <option value="1">Admin</option>
              <option value="2">Coordinator</option>
              <option value="3">Driver</option>
              <option value="4">Customer</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Mobile</label>
            <input
              type="text"
              name="mobile"
              className="form-control"
              placeholder="Enter Mobile"
              value={formData.mobile}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              className="form-control"
              placeholder="Enter WhatsApp Number"
              value={formData.whatsapp}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="text-end">
          <button type="button" className="btn common-outlined-button mx-2">
            Cancel
          </button>
          <button type="submit" className="btn common-btn px-4">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;

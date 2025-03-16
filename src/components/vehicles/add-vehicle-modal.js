import React, { useState } from "react";
import vehicleService from "../../services/logistic-service";

const AddVehicleModal = () => {
  const [formData, setFormData] = useState({
    vehicleName: "",
    registrationNumber: "",
    vehicleType: "",
    otherDetails: "",
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
      const response = await vehicleService.addVehicle(formData); // API call
      console.log("Vehicle registered successfully", response);
      alert("Vehicle registered successfully!");
    } catch (error) {
      console.error("Error registering vehicle:", error);
      alert("Failed to register vehicle!");
    }
  };

  return (
    <div className="form-container">
      <div className="form-title">
        {/* <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="Icon"/> */}
        Vehicle Registration
      </div>
      <p>Add your own vehicle</p>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Vehicle Name</label>
            <input
              type="text"
              name="vehicleName"
              className="form-control"
              placeholder="Enter vehicle name"
              value={formData.vehicleName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Vehicle Registration Number</label>
            <input
              type="text"
              name="registrationNumber"
              className="form-control"
              placeholder="Enter registration number"
              value={formData.registrationNumber}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Vehicle Type</label>
            <input
              type="text"
              name="vehicleType"
              className="form-control"
              placeholder="Enter vehicle type"
              value={formData.vehicleType}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
          <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="ownVehicle"
                name="ownVehicle"
                checked={formData.ownVehicle}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="ownVehicle">
                Own Vehicle
              </label>
            </div>
          </div>
        </div>
        <div className="text-end">
          <button type="submit" className="btn common-btn px-3">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicleModal;

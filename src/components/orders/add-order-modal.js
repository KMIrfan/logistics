import React, { useState } from "react";
import "./order.css";
import orderService from "../../services/logistic-service";

const AddOrder = () => {
  const [formData, setFormData] = useState({
    orderName: "",
    ownVehicle: false,
    restTimeAllowed: false,
    vehicleType: "",
    restTime: "",
    vehicleNumber: "",
    pickUpPoint: "",
    driverName: "",
    estimatedTime: "",
    driverMobile: "",
    deliveredTo: "",
    customerMobile: "",
    customerName: "",
  });

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await orderService.addOrder(formData); // API call
      console.log("Order created successfully", response);
      alert("Order created successfully!");
    } catch (error) {
      console.error("Error creating order:", error);
      alert("Failed to create order!");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Order Name</label>
          <input
            type="text"
            name="orderName"
            className="form-control"
            placeholder="Add address"
            value={formData.orderName}
            onChange={handleChange}
          />
        </div>

        <div className="row mb-3">
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
          <div className="col-md-6">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="restTimeAllowed"
                name="restTimeAllowed"
                checked={formData.restTimeAllowed}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="restTimeAllowed">
                Rest Time Allowed
              </label>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Type of Vehicle</label>
            <select
              name="vehicleType"
              className="form-select"
              value={formData.vehicleType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="1">Car</option>
              <option value="2">Truck</option>
              <option value="3">Bike</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Rest Time</label>
            <select
              name="restTime"
              className="form-select"
              value={formData.restTime}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="30 mins">30 mins</option>
              <option value="1 hour">1 hour</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Vehicle Number</label>
            <input
              type="text"
              name="vehicleNumber"
              className="form-control"
              placeholder="Number"
              value={formData.vehicleNumber}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Pick up Point</label>
            <input
              type="text"
              name="pickUpPoint"
              className="form-control"
              placeholder="Pick up location"
              value={formData.pickUpPoint}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Driver Name</label>
            <input
              type="text"
              name="driverName"
              className="form-control"
              placeholder="Driver Name"
              value={formData.driverName}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Estimated Time</label>
            <input
              type="text"
              name="estimatedTime"
              className="form-control"
              placeholder="Estimated Time"
              value={formData.estimatedTime}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Driver Mobile Number</label>
            <input
              type="text"
              name="driverMobile"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.driverMobile}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Delivered To</label>
            <input
              type="text"
              name="deliveredTo"
              className="form-control"
              placeholder="Location"
              value={formData.deliveredTo}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Customer Mobile Number</label>
            <input
              type="text"
              name="customerMobile"
              className="form-control"
              placeholder="Mobile Number"
              value={formData.customerMobile}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Customer Name</label>
            <input
              type="text"
              name="customerName"
              className="form-control"
              placeholder="Name"
              value={formData.customerName}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="text-end">
          <button type="submit" className="btn common-btn px-4">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddOrder;

import React from 'react'
import './order.css'

const AddOrder = () => {
  return (
    <div className="form-container">
        <form>
            <div className="mb-3">
                <label className="form-label">Order Name</label>
                <input type="text" className="form-control" placeholder="Add address"/>
            </div>
            
            <div className="row mb-3">
                <div className="col-md-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="ownVehicle"/>
                        <label className="form-check-label" for="ownVehicle">Own Vehicle</label>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="restTimeAllowed"/>
                        <label className="form-check-label" for="restTimeAllowed">Rest Time Allowed</label>
                    </div>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Type of Vehicle</label>
                    <select className="form-select">
                        <option selected>Type</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Rest Time</label>
                    <select className="form-select">
                        <option selected>Select</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Vehicle Number</label>
                    <input type="text" className="form-control" placeholder="Number"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Pick up Point</label>
                    <select className="form-select">
                        <option selected>Select</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Driver Name</label>
                    <select className="form-select">
                        <option selected>Driver</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Estimated Time</label>
                    <select className="form-select">
                        <option selected>Select</option>
                    </select>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Driver Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Mobile Number"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Delivered To</label>
                    <input type="text" className="form-control" placeholder="Location"/>
                </div>
            </div>

            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Customer Mobile Number</label>
                    <input type="text" className="form-control" placeholder="Mobile Number"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Customer Name</label>
                    <input type="text" className="form-control" placeholder="Name"/>
                </div>
            </div>

            <div className="text-end">
                <button type="submit" className="btn common-btn px-4">Create</button>
            </div>
        </form>
    </div>
  )
}

export default AddOrder
import React from 'react'

const addVehicleModal = () => {
  return (
    <div className="form-container">
    <div className="form-title">
        {/* <img src="https://img.icons8.com/ios-filled/50/000000/car.png" alt="Icon"> */}
        Vehicle Registration
    </div>
    <p>Add your own vehicle</p>
    <form>
        <div className="row mb-3">
            <div className="col-md-6">
                <label className="form-label">Vehicle Name</label>
                <input type="text" className="form-control" placeholder="Enter vehicle name"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Vehicle Registration Number</label>
                <input type="text" className="form-control" placeholder="Enter registration number"/>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-md-6">
                <label className="form-label">Vehicle Type</label>
                <input type="text" className="form-control" placeholder="Enter vehicle type"/>
            </div>
            <div className="col-md-6">
                <label className="form-label">Other Details</label>
                <input type="text" className="form-control" placeholder="Phone number"/>
            </div>
        </div>
        <div className="text-end">
            <button type="submit" className="btn common-btn px-3">Register</button>
        </div>
    </form>
</div>  )
}

export default addVehicleModal
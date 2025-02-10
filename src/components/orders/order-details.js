import React from 'react'
import "./order.css"


const OrderDetails = () => {
  return (
    <div className="container mt-3 bg-white p-3 rounded-2">
        <div className="row">
            <div className="col-md-6 details-section">
                <h5><strong>Vehicle Details</strong></h5>
                <p><i class="fa fa-user-circle-o px-2" aria-hidden="true"></i>Driver Name</p>
                <p><i className="fa fa-truck px-2"></i> Vehicle Type</p>
                <p><i className="fa fa-id-card px-2"></i> Driver Contact Number</p>
            </div>
            <div className="col-md-6 details-section">
                <h5><strong>Customer Details</strong></h5>
                <p><i className="fa fa-user px-2"></i> Customer Name</p>
                <p><i class="fa fa-location-arrow px-2" aria-hidden="true"></i>Place</p>
            </div>
        </div>

        <div className="row time-section text-center">
            <div className="col-md-4"><strong><i className="fa fa-clock px-2"></i> Estimated Delivery Time</strong><br/>10.30</div>
            <div className="col-md-4"><strong><i className="fa fa-bed px-2"></i> Reached Time</strong><br/>10.30</div>
            <div className="col-md-4"><strong><i className="fa fa-map-marker px-2"></i> Last Updated Location</strong><br/>10.30</div>
        </div>
        
        <div className="row time-section text-center mt-2">
            <div className="col-md-4"><strong><i className="fa fa-box px-2"></i> Loading Time</strong><br/>10.30</div>
            <div className="col-md-4"><strong><i className="fa fa-dolly px-2"></i> Off load Time</strong><br/>10.30</div>
            <div className="col-md-4"><strong><i className="fa fa-undo px-2"></i> Returned Time</strong><br/>10.30</div>
        </div>
        
        <div className="row time-section text-center mt-2">
            <div className="col-md-4"><strong><i className="fa fa-play px-2"></i> Started Time</strong><br/>10.30</div>
            <div className="col-md-4"><strong><i className="fa fa-bed px-2"></i> Rest Time</strong><br/>10.30</div>
        </div>

        <div className="text-end mt-3">
            <button className="btn common-btn">View on Map</button>
        </div>
    </div>
  )
}

export default OrderDetails
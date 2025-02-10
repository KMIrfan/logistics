import React from 'react'
import VehicleIcon from '../../assets/icons/vehicle.svg'

const Notification = () => {
  return (
    <div className='container-fluid p-0'>
        <div className='row mt-4 mb-3'>
            <div className='col-12'>
                <span className='page-head'>Notifications</span>
            </div>
        </div>

        <div className='row mt-2 mb-2'>
            <div className='col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="card-title">
                            <div className='d-flex p-0'>
                                <div className='col-md-2 col-3'>
                                    <img src={VehicleIcon} alt='' height={'50px'} />
                                </div>
                                <div className='col-md-10 col-9 p-0'>
                                    <span className='vehicle-num'>KL 10 84 D 0543</span>
                                    <span className='card-sub-text d-block'>Vehicle Type</span>
                                    <span className='card-sub-text d-block'>Location</span>
                                    <span className='card-sub-text d-block'>Driver</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='row mt-2 mb-2'>
            <div className='col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="card-title">
                            <div className='d-flex p-0'>
                                <div className='col-md-2 col-3'>
                                    <img src={VehicleIcon} alt='' height={'50px'}/>
                                </div>
                                <div className='col-md-10 col-9 p-0'>
                                    <span className='vehicle-num'>Order Name</span>
                                    <span className='card-sub-text d-block'>Customer Name</span>
                                    <span className='card-sub-text d-block'>Location</span>
                                    <span className='card-sub-text d-block'>Vehicle Details</span>
                                    <span className='card-sub-text d-block'>Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className='row mt-2 mb-2'>
            <div className='col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <div className="card-title">
                            <div className='d-flex p-0'>
                                <div className='col-md-2 col-3'>
                                    <img src={VehicleIcon} alt='' height={'50px'}/>
                                </div>
                                <div className='col-md-10 col-9 p-0'>
                                    <span className='vehicle-num'>Order Name</span>
                                    <span className='card-sub-text d-block'>Customer Name</span>
                                    <span className='card-sub-text d-block'>Location</span>
                                    <span className='card-sub-text d-block'>Vehicle Details</span>
                                    <span className='card-sub-text d-block'>Status</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification
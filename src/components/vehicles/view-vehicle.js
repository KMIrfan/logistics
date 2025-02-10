import React, { useState} from 'react'
import VehicleIcon from '../../assets/icons/vehicle.svg'
import AddVehicle from './add-vehicle-modal'
import { Modal } from "antd";

const ViewVehicle = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCancel = () => {
    setIsModalOpen(false)
    }

    const handleOk = () => {

    }
  
  return (
    <div className='container-fluid p-0'>
      <div className='row mt-4 mb-3'>
        <div className='col-6'>
          <span className='page-head'>Vehicles</span>
        </div>
        <div className='col-6 text-end'>
          <button className='btn common-btn' onClick={() => setIsModalOpen(true)}>Add Vehicle</button>
          <Modal
            title="Add Vehicle"
            open={isModalOpen}
            width="60vw"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <AddVehicle />
          </Modal>
        </div>
      </div>

      <i className="fa fa-filter icon-color" aria-hidden="true" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? " Hide Filters" : " Show Filters"}
      </i>
      <div className={`filter-collapse ${isOpen ? "open" : ""}`}>
        <div className="row mt-3 mb-3">
          <div className="col-">
            <input type="text" placeholder="Vehicle Name" className="common-input m-1" />
            <input type="text" placeholder="Vehicle Type" className="common-input m-1" />
          </div>
        </div>
      </div>

      <div className="row mt-4 mb-3">
        <div className="col-12 d-flex justify-content-end">
          <div className="input-group" style={{ width: "250px" }}> {/* Adjust width as needed */}
            <input type="text" className="form-control rounded-start" placeholder="Search..." />
            <button className="btn common-outlined-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className='row'>
      <div className='col-md-3 col-12 p-1'>
            <div className="card mt-1">
              <div className="card-body">
                  <div className="card-title">
                      <div className='d-flex mt-2 p-0'>
                          <div className='col-3'>
                              <img src={VehicleIcon} alt='' />
                          </div>
                          <div className='col-9 p-0'>
                              <span className='vehicle-num'>KL 10 84 D 0543</span>
                              <span className='card-sub-text d-block'>Vehicle Type</span>
                          </div>
                      </div>
                  </div>
                  <div className='d-flex text-center mt-2 card-vehicle-footer'>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span className='px-2'>
                          Location
                      </span>
                  </div>
                  <div className='d-flex text-center card-vehicle-footer mt-1'>
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className='px-2'>
                          Driver
                      </span>
                  </div>
              </div>
          </div>
          </div>

          <div className='col-md-3 col-12 p-1'>
            <div className="card mt-1">
              <div className="card-body">
                  <div className="card-title">
                      <div className='d-flex mt-2 p-0'>
                          <div className='col-3'>
                              <img src={VehicleIcon} alt='' />
                          </div>
                          <div className='col-9 p-0'>
                              <span className='vehicle-num'>KL 10 84 D 0543</span>
                              <span className='card-sub-text d-block'>Vehicle Type</span>
                          </div>
                      </div>
                  </div>
                  <div className='d-flex text-center mt-2 card-vehicle-footer'>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span className='px-2'>
                          Location
                      </span>
                  </div>
                  <div className='d-flex text-center card-vehicle-footer mt-1'>
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className='px-2'>
                          Driver
                      </span>
                  </div>
              </div>
          </div>
          </div>

          <div className='col-md-3 col-12 p-1'>
            <div className="card mt-1">
              <div className="card-body">
                  <div className="card-title">
                      <div className='d-flex mt-2 p-0'>
                          <div className='col-3'>
                              <img src={VehicleIcon} alt='' />
                          </div>
                          <div className='col-9 p-0'>
                              <span className='vehicle-num'>KL 10 84 D 0543</span>
                              <span className='card-sub-text d-block'>Vehicle Type</span>
                          </div>
                      </div>
                  </div>
                  <div className='d-flex text-center mt-2 card-vehicle-footer'>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span className='px-2'>
                          Location
                      </span>
                  </div>
                  <div className='d-flex text-center card-vehicle-footer mt-1'>
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className='px-2'>
                          Driver
                      </span>
                  </div>
              </div>
          </div>
          </div>

          <div className='col-md-3 col-12 p-1'>
            <div className="card mt-1">
              <div className="card-body">
                  <div className="card-title">
                      <div className='d-flex mt-2 p-0'>
                          <div className='col-3'>
                              <img src={VehicleIcon} alt='' />
                          </div>
                          <div className='col-9 p-0'>
                              <span className='vehicle-num'>KL 10 84 D 0543</span>
                              <span className='card-sub-text d-block'>Vehicle Type</span>
                          </div>
                      </div>
                  </div>
                  <div className='d-flex text-center mt-2 card-vehicle-footer'>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span className='px-2'>
                          Location
                      </span>
                  </div>
                  <div className='d-flex text-center card-vehicle-footer mt-1'>
                      <i class="fa fa-user-circle-o" aria-hidden="true"></i>
                      <span className='px-2'>
                          Driver
                      </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewVehicle
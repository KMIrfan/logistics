import React, { useState, useEffect} from 'react'
import VehicleIcon from '../../assets/icons/vehicle.svg'
import AddVehicle from './add-vehicle-modal'
import { Modal } from "antd";
import Shared from '../shared/shared'
import vehicleService from "../../services/logistic-service";


const ViewVehicle = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    console.log("Component mounted");
    fetchVehicles(); // Fetch vehicles on component mount
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await vehicleService.getVehicles();
      console.log("Fetched vehicles:", response.data);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleCancel = () => {
  setIsModalOpen(false)
  }

  const handleOk = () => {

  }

  const vehicles = [
    { id: 1, number: 'KL 10 84 D 0543', type: 'Truck', location: 'Kochi', driver: 'John Doe' },
    { id: 2, number: 'KL 12 AB 5678', type: 'Van', location: 'Trivandrum', driver: 'Alice Smith' },
    { id: 3, number: 'KL 07 XY 9012', type: 'Mini Truck', location: 'Calicut', driver: 'Robert Brown' },
    { id: 4, number: 'KL 55 PQ 3456', type: 'Tempo', location: 'Kannur', driver: 'David Johnson' },
    { id: 5, number: 'KL 55 PQ 3456', type: 'Tempo', location: 'Kannur', driver: 'David Johnson' },
    { id: 6, number: 'KL 55 PQ 3456', type: 'Tempo', location: 'Kannur', driver: 'David Johnson' },
  ];
  
  return (
    <div className='container-fluid p-0'>
      <div className='row mt-4 mb-3'>
        <div className='col-6'>
          <span className='page-head'>Vehicles</span>
        </div>
        <div className='col-6 text-end'>
          <button className='btn common-btn' onClick={() => setIsModalOpen(true)}>Add Vehicle</button>
          <Modal
            // title="Add Vehicle"
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
            <Shared filter={"vehicles"} />
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

      <div className='row mb-3'>
        {vehicles.map((vehicle) => (
          <div className='col-md-3 col-12 mt-2' key={vehicle.id}>
            <div className="card mt-1">
              <div className="card-body">
                <div className="card-title">
                  <div className='d-flex mt-2 p-0'>
                    <div className='col-3'>
                      <img src={VehicleIcon} alt='' />
                    </div>
                    <div className='col-9 p-0'>
                      <span className='vehicle-num'>{vehicle.number}</span>
                      <span className='card-sub-text d-block'>{vehicle.type}</span>
                    </div>
                  </div>
                </div>
                <div className='d-flex text-center mt-2 card-vehicle-footer'>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                  <span className='px-2'>{vehicle.location}</span>
                </div>
                <div className='d-flex text-center card-vehicle-footer mt-1'>
                  <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                  <span className='px-2'>{vehicle.driver}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewVehicle
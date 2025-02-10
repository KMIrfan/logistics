import React, { useState} from 'react'
import RoundTick from '../../assets/icons/round-green-tick.svg'
import Truck from '../../assets/icons/truck.svg'
import './order.css'
import AddOrder from './add-order-modal'
import { Modal } from "antd";


const ViewOrder = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {

  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  return (
    <div className='container-fluid p-0'>
      <div className='row mt-4 mb-3'>
        <div className='col-6'>
          <span className='page-head'>Orders</span>
        </div>
        <div className='col-6 text-end'>
          <button className='btn common-btn' onClick={() => setIsModalOpen(true)}>Create Order</button>
          <Modal
            title="Add Order"
            open={isModalOpen}
            width="60vw"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <AddOrder />
          </Modal>

        </div>
      </div>

      <i className="fa fa-filter icon-color" aria-hidden="true" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? " Hide Filters" : " Show Filters"}
      </i>
      <div className={`filter-collapse ${isOpen ? "open" : ""}`}>
        <div className="row mt-3 mb-3">
          <div className="col-">
            <input type="text" placeholder="Order Name" className="common-input m-1" />
            <input type="text" placeholder="Customer Name" className="common-input m-1" />
            <input type="text" placeholder="Vehicle Number" className="common-input m-1" />
            <input type="text" placeholder="Status" className="common-input m-1" />
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
          <div className='col-md-4 col-12 p-1'>
            <div className="card">
              <div className="card-body">
                <div className='text-end'>
                  <span className='text-end'>15</span>
                  <img src={Truck} alt=''/>
                </div>
                <span className="card-title">Order Name</span>
                  <div className='card-vehicle-footer mt-2'>
                      <span className='px-2'>
                        To :  Jeddah
                      </span>
                  </div>
                  <div className='card-vehicle-footer'>
                    <span className='px-2'>
                      Delivered Time :  10hrs
                    </span>
                  </div>
                  <div className='text-end'>
                    <img src={RoundTick} alt='' width={16}/>
                    <span className='order-status px-2'>Delivered</span>
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-12 p-1'>
            <div className="card">
              <div className="card-body">
                <div className='text-end'>
                  <span className='text-end'>15</span>
                  <img src={Truck} alt=''/>
                </div>
                <span className="card-title">Order Name</span>
                  <div className='card-vehicle-footer mt-2'>
                      <span className='px-2'>
                        To :  Jeddah
                      </span>
                  </div>
                  <div className='card-vehicle-footer'>
                    <span className='px-2'>
                      Delivered Time :  10hrs
                    </span>
                  </div>
                  <div className='text-end'>
                    <img src={RoundTick} alt='' width={16}/>
                    <span className='order-status px-2'>Delivered</span>
                  </div>
              </div>
            </div>
          </div>

          <div className='col-md-4 col-12 p-1'>
            <div className="card">
              <div className="card-body">
                <div className='text-end'>
                  <span className='text-end'>15</span>
                  <img src={Truck} alt=''/>
                </div>
                <span className="card-title">Order Name</span>
                  <div className='card-vehicle-footer mt-2'>
                      <span className='px-2'>
                        To :  Jeddah
                      </span>
                  </div>
                  <div className='card-vehicle-footer'>
                    <span className='px-2'>
                      Delivered Time :  10hrs
                    </span>
                  </div>
                  <div className='text-end'>
                    <img src={RoundTick} alt='' width={16}/>
                    <span className='order-status px-2'>Delivered</span>
                  </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    
  );
}

export default ViewOrder
import React, { useState} from 'react'

const Report = () => {

  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className='container-fluid p-0'>
      <div className='row mt-4 mb-3'>
        <div className='col-6'>
          <span className='page-head'>Reports</span>
        </div>
        <div className='col-6 text-end'>
          <button className='btn common-btn px-4'>Export</button>
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
          <div className="input-group" style={{ width: "250px" }}>
            <input type="text" className="form-control rounded-start" placeholder="Search..." />
            <button className="btn common-outlined-button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className='row m-2'>
        <div className='col-12 bg-white rounded-2'>
        <table className="table table-bordered mt-2">
          <thead>
            <tr>
                <th>Order Id</th>
                <th>Customer Name</th>
                <th>Driver Name</th>
                <th>Vehicle Type </th>
                <th>Delivery Location</th>
                <th>Status</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John</td>
              <td>Doe</td>
              <td>Trailer</td>
              <td>Riyad</td>
              <td>Loading</td>
            </tr>
            <tr>
              <td>2</td>
              <td>John</td>
              <td>Doe</td>
              <td>Trailer</td>
              <td>Riyad</td>
              <td>Loading</td>
            </tr>
            <tr>
              <td>3</td>
              <td>John</td>
              <td>Doe</td>
              <td>Trailer</td>
              <td>Riyad</td>
              <td>Loading</td>
            </tr>
        </tbody>
      </table>
        </div>

        <div className='col-12 bg-white rounded-2 mt-2'>
          sdf
        </div>
      </div>
    </div>
  );
}

export default Report
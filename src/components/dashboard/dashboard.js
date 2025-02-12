import React from 'react'
import './dashboard.css'
import blueTruck from '../../assets/icons/blue-truck.svg'
import RoundTick from '../../assets/icons/round-green-tick.svg'
import YellowCart from '../../assets/icons/cart-yellow.svg'
import VehicleIcon from '../../assets/icons/vehicle.svg'
import { useNavigate } from 'react-router-dom';



// function dashboard() {
const Dashboard = () => {


    const vehicles = [
        { id: 1, number: 'KL 10 84 D 0543', type: 'Truck', location: 'Kochi', driver: 'John Doe' },
        { id: 2, number: 'KL 12 AB 5678', type: 'Van', location: 'Trivandrum', driver: 'Alice Smith' },
        { id: 3, number: 'KL 07 XY 9012', type: 'Mini Truck', location: 'Calicut', driver: 'Robert Brown' },
        { id: 4, number: 'KL 55 PQ 3456', type: 'Tempo', location: 'Kannur', driver: 'David Johnson' },
    ];

    const navigate = useNavigate();

      
  return (
    <div className='container-fluid'>
        <div className='row mt-3'>
            <div className='col-md-4 col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <span className="card-title">Running Orders</span>
                        <div className='d-flex text-center mt-4'>
                            <span className="col-5">
                                <img src={blueTruck} alt=''/>
                            </span>
                            <span className="col-7 card-text-count">120</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-4 col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <span className="card-title">Pending Orders</span>
                        <div className='d-flex text-center mt-4'>
                            <span className="col-5">
                                <img src={YellowCart} alt=''/>
                            </span>
                            <span className="col-7 card-text-count">80</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='col-md-4 col-12'>
                <div className="card mt-1">
                    <div className="card-body">
                        <span className="card-title">Delivered Orders</span>
                        <div className='d-flex text-center mt-4'>
                            <span className="col-5">
                                <img src={RoundTick} alt=''/>
                            </span>
                            <span className="col-7 card-text-count">100</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <section className='mt-1 mt-md-2 m-2'>
            <div className='row'>
                <div className='col-md-5 col-12 p-1'>
                    <div className="card mt-1">
                        <div className="card-body">
                            <span className="card-title">Order Progress</span>
                            <div className='d-flex text-center mt-4'>
                               chart
                            </div>
                        </div>
                    </div>
                </div>

                <div className='col-md-7 col-12 mt-1 mt-md-0 p-1'>
                    <div className="card mt-1">
                        <div className="card-body">
                            <span className="card-title">Recent Orders</span>
                            <div className='d-flex text-center mt-4'>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Firstname</th>
                                        <th>Lastname</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>John</td>
                                        <td>Doe</td>
                                        <td>john@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>Mary</td>
                                        <td>Moe</td>
                                        <td>mary@example.com</td>
                                    </tr>
                                    <tr>
                                        <td>July</td>
                                        <td>Dooley</td>
                                        <td>july@example.com</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



        {/* Vehicles Section */}
      <div className='row mt-3 mb-3 bg-white rounded-3 m-1'>
        <span className='text-title mt-3'>Vehicles</span>
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
        <div className='bg-white mb-3 text-end'>
          <button className='btn common-btn mt-3' onClick={() => navigate('/viewVehicles')}>
            View more &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard
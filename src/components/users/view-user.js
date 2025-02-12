import React, { useState} from 'react'
import { Modal } from "antd";
import AddUser from './add-user-modal'

const ViewUser = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const users = [
    { id: 1, name: 'John', role: 'Admin' },
    { id: 2, name: 'Jane', role: 'Manager' },
    { id: 3, name: 'Doe', role: 'Employee' },
    { id: 4, name: 'Alice', role: 'Supervisor' },
  ];

  const handleCancel = () => {
  setIsModalOpen(false)
  }

  const handleOk = () => {

  }

  return (
    <div className='container-fluid p-0'>
      <div className='row mt-4 mb-3'>
        <div className='col-6'>
          <span className='page-head'>Users</span>
        </div>
        <div className='col-6 text-end'>
          <button className='btn common-btn' onClick={() => setIsModalOpen(true)}>Add User</button>
          <Modal
            // title="Add User"
            open={isModalOpen}
            width="60vw"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <AddUser />
          </Modal>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-12'>
          <table className="table table-bordered mt-2">
            <thead>
              <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Role</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <i className="fa fa-ellipsis-v" aria-hidden="true"></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ViewUser
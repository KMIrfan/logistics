import React from 'react'
import "./user.css"

const addUserModal = () => {
  return (
    <div className="form-container">
        <h3>User Registration</h3>
        <form>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder="Input text"/>
                </div>
                <div className="col-md-6">
                    <label className="form-label">User Name</label>
                    <input type="text" className="form-control" placeholder="Input text"/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Input text"/>
            </div>
            <div className="row mb-3">
                <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <select className="form-select">
                        <option selected>Input text</option>
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="form-label">Role</label>
                    <select className="form-select">
                        <option selected>Input text</option>
                    </select>
                </div>
            </div>
            <div className="mb-3 profile-upload">
                <span>Upload</span>
            </div>
            <div className="text-end">
                <button type="button" className="btn common-outlined-button mx-2">Cancel</button>
                <button type="submit" className="btn common-btn px-4">Add</button>
            </div>
        </form>
    </div>
  )
}

export default addUserModal
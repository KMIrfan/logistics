import React from 'react'
import './user.css'

const Profile = () => {
  return (
    <div className="profile-settings-container m-3">
      <div className="">
        {/* Header */}
        <div className="text-center">
          <h5 className="fw-bold">Profile settings</h5>
        </div>

        <div className="profile-img-container mx-auto position-relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-img rounded-circle"
          />
          <div className="edit-icon position-absolute">
          </div>
        </div>

        {/* Form */}
        <form className="mt-3">
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value="James Harrid" />
          </div>

          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" value="123-456-7890"  />
          </div>

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value="example@email.com" />
          </div>

          <div className="mb-2 position-relative">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value="**********" />
          </div>

          <div className="mb-3">
            <label className="form-label">Birthday</label>
            <input type="date" className="form-control" />
          </div>

          {/* Save Button */}
          <button className="btn common-btn w-100">Save changes</button>
        </form>
      </div>
    </div>
  )
}

export default Profile
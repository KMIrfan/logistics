import React from 'react'
import './user.css'

const Profile = () => {
  return (
    <div className="profile-settings-container">
      <div className="profile-card p-4">
        {/* Header */}
        <div className="text-center">
          <h5 className="fw-bold">Profile settings</h5>
        </div>

        {/* Profile Image */}
        <div className="profile-img-container mx-auto position-relative">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Profile"
            className="profile-img rounded-circle"
          />
          <div className="edit-icon position-absolute">
            {/* <FaPencilAlt /> */}
          </div>
        </div>

        {/* Form */}
        <form className="mt-3">
          <div className="mb-2">
            <label className="form-label">Name</label>
            <input type="text" className="form-control" value="James Harrid" readOnly />
          </div>

          <div className="mb-2">
            <label className="form-label">Phone</label>
            <input type="text" className="form-control" value="123-456-7890" readOnly />
          </div>

          <div className="mb-2">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" value="example@email.com" readOnly />
          </div>

          <div className="mb-2 position-relative">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" value="**********" readOnly />
            {/* <FaEye className="eye-icon position-absolute" /> */}
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
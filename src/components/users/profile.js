import React, { useState, useEffect } from "react";
import "./user.css";
import loginAvathar from "../../assets/images/login-avathar.png";
import userService from "../../services/logistic-service"; // Import API service

const Profile = () => {
  const [userId] = useState(1); // Replace with dynamic user ID if needed
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    birthday: "",
  });

  // Fetch user data on component load
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await userService.getUserProfile(userId);
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchUserProfile();
  }, [userId]);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.updateUserProfile(userId, profile);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile!");
    }
  };

  return (
    <div className="profile-settings-container m-3">
      <div className="text-center">
        <h5 className="fw-bold">Profile settings</h5>
      </div>

      <div className="profile-img-container mx-auto position-relative">
        <img src={loginAvathar} alt="Profile" className="profile-img rounded-circle" />
      </div>

      <form className="mt-3" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Name</label>
          <input type="text" name="name" className="form-control" value={profile.name} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label className="form-label">Phone</label>
          <input type="text" name="phone" className="form-control" value={profile.phone} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={profile.email} onChange={handleChange} />
        </div>

        <div className="mb-2">
          <label className="form-label">Password</label>
          <input type="password" name="password" className="form-control" value={profile.password} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label className="form-label">Birthday</label>
          <input type="date" name="birthday" className="form-control" value={profile.birthday} onChange={handleChange} />
        </div>

        <button type="submit" className="btn common-btn w-100">Save changes</button>
      </form>
    </div>
  );
};

export default Profile;

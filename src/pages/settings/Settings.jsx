import React, { useState } from 'react'
import './Settings.css'
function Settings({setPassword, setUsername}) {
    const [formData, setFormData] = useState({
        email: "demo@mirazmac.com",
        username: "Admin",
        newPassword: "",
        currentPassword: "",
        fullName: "John Doe",
        gender: "Male",
        avatar: null,
        useGravatar: false,
      });
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, avatar: file });
      };
    
      const handleToggleGravatar = () => {
        setFormData({ ...formData, useGravatar: !formData.useGravatar });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
      };
  return (
    <section id='content'>
        <main>
        <div className="user-profile-container">
      <form onSubmit={handleSubmit} className="user-profile-form">
        <div className="form-row">
          <div className="form-group">
            <label>E-Mail</label>
            <input
              type="email"
              name="email"
              value={setUsername}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              disabled
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>New Password</label>
            <input
              type="password"
              name="newPassword"
              placeholder="6 characters or more"
              value={setPassword}
              onChange={handleInputChange}
            />
            <small>Leave blank if you don't want to change.</small>
          </div>
          <div className="form-group">
            <label>
              Current Password <a href="#forgot">Forgot Password</a>
            </label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Gender</label>
            <div className="radio-group">
              {["Male", "Female", "Non-Binary"].map((gender) => (
                <label key={gender}>
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleInputChange}
                  />
                  {gender}
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Avatar</label>
            <div className="avatar-upload">
              <input
                type="file"
                name="avatar"
                onChange={handleAvatarChange}
                accept="image/*"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Force Gravatar</label>
            <div className="toggle-switch">
              <label>
                <input
                  type="checkbox"
                  checked={formData.useGravatar}
                  onChange={handleToggleGravatar}
                />
                <span>Remove avatar and use Gravatar</span>
              </label>
            </div>
          </div>
        </div>

        <button type="submit" className="update-btn">
          Update
        </button>
      </form>
    </div>
        </main>
    </section>
  )
}

export default Settings
import React, { useState } from 'react';
import Header from '../../components/Header/Header.js';
import Footer from '../../components/Footer/Footer.js';
import './UserProfile.css';
import { useNavigate, Link } from 'react-router-dom';


const UserProfile = ({ user }) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(user.avatar || '');

  // Sample avatars list
  const avatars = [
    { name: 'Avatar1', url: 'url-to-avatar1.jpg' }, 
    { name: 'Avatar2', url: 'url-to-avatar2.jpg' }, 
    // ... more avatars
  ];

  const handlePasswordChange = (e) => {
    e.preventDefault();
    // Add logic to handle password change
    console.log('Change Password:', currentPassword, newPassword, confirmPassword);
  };

  const handleAvatarChange = (e) => {
    setSelectedAvatar(e.target.value);
    // Additional logic to update the user's avatar
  };

  // Find the URL of the selected avatar
  const selectedAvatarUrl = avatars.find(avatar => avatar.name === selectedAvatar)?.url;

  return (
    <div>
      <Header />
      <div className="user-profile">
        <h2>User Profile</h2>
        
        {/* Avatar Selection with Icon */}
        <div className="avatar-selection">
          <img src={selectedAvatarUrl || 'default-avatar-url.jpg'} alt="User Avatar" className="user-avatar" />
          <label htmlFor="avatar">Choose an Avatar:</label>
          <select id="avatar" value={selectedAvatar} onChange={handleAvatarChange}>
            {avatars.map(avatar => (
              <option key={avatar.name} value={avatar.name}>{avatar.name}</option>
            ))}
          </select>
        </div>

        {/* User Information */}
        <div className="user-info">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>

        {/* Change Password */}
        <form className="password-change-form" onSubmit={handlePasswordChange}>
          <h3>Change Password</h3>
          <input type="password" placeholder="Current Password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} />
          <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
          <input type="password" placeholder="Confirm New Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          <button type="submit">Change Password</button>
        </form>

        {/* Activity Log */}
        <div className="activity-log">
          <h3>Activity Log</h3>
          <p>This section can show the user's activity logs...</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;

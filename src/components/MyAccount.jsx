import '../styles/MyAccount.css';

import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MyAccount.css';

function MyAccount() {
  const [activeSection, setActiveSection] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'Md',
    lastName: 'Rimel',
    email: 'rimel1111@gmail.com',
    address: 'Kingston, 5236, United State',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log('Saving changes:', formData);
  };

  const handleCancel = () => {
    // Reset form or navigate away
    setFormData({
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel1111@gmail.com',
      address: 'Kingston, 5236, United State',
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    });
  };

  return (
    <div className="account-page">
      <div className="account-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </div>

        {/* Welcome Message */}
        <div className="welcome-message">
          <span>Welcome!</span>
          <span className="user-name">Md Rimel</span>
        </div>

        <div className="account-content">
          {/* Sidebar */}
          <div className="account-sidebar">
            <div className="sidebar-section">
              <h3>Manage My Account</h3>
              <ul>
                <li
                  className={activeSection === 'profile' ? 'active' : ''}
                  onClick={() => setActiveSection('profile')}
                >
                  My Profile
                </li>
                <li onClick={() => setActiveSection('address')}>
                  Address Book
                </li>
                <li onClick={() => setActiveSection('payment')}>
                  My Payment Options
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>My Orders</h3>
              <ul>
                <li onClick={() => setActiveSection('returns')}>My Returns</li>
                <li onClick={() => setActiveSection('cancellations')}>
                  My Cancellations
                </li>
              </ul>
            </div>

            <div className="sidebar-section">
              <h3>My Wishlist</h3>
            </div>
          </div>

          {/* Main Content */}
          <div className="account-main">
            <h2 className="form-title">Edit Your Profile</h2>

            <div className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Md"
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Rimel"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="rimel1111@gmail.com"
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Kingston, 5236, United State"
                  />
                </div>
              </div>

              <div className="password-section">
                <label>Password Changes</label>
                <input
                  type="password"
                  name="currentPassword"
                  value={formData.currentPassword}
                  onChange={handleInputChange}
                  placeholder="Current Passwod"
                />
                <input
                  type="password"
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder="New Passwod"
                />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm New Passwod"
                />
              </div>

              <div className="form-actions">
                <button className="btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn-save" onClick={handleSaveChanges}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;

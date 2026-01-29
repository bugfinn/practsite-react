import { useState, useRef, useEffect } from 'react';
import '../styles/UserDropdown.css';

function UserDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="user-dropdown" ref={dropdownRef}>
      <button className="user-icon-btn" onClick={() => setIsOpen(!isOpen)}>
        <img src="/images/icons/user.png" alt="User" />
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <ul>
            <li>
              <img
                src="/images/icons/user 1.png"
                className="user-icon"
                alt=""
              />
              <span>Manage My Account</span>
            </li>
            <li>
              <img src="/images/icons/icon-mallbag.png" alt="" />
              <span>My Order</span>
            </li>
            <li>
              <img src="/images/icons/icon-cancel.png" alt="" />
              <span>My Cancellations</span>
            </li>
            <li>
              <img src="/images/icons/Icon-Reviews.png" alt="" />
              <span>My Reviews</span>
            </li>
            <li>
              <img src="/images/icons/Icon-logout.png" alt="" />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDropdown;

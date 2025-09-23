import React, { useState } from 'react';
import { NavLink } from "react-router-dom";

function Nav({ currentUser, onLogout }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!currentUser) {
    return null;
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="Nav">
      <nav className={`navbar navbar-expand-lg eternal-navbar ${currentUser.theme}`}>
        <div className="container-fluid position-relative">
          <div className="navbar-cosmic-bg"></div>
          
          <NavLink className="navbar-brand eternal-brand d-flex align-items-center" to="/home">
            <div className="brand-icon me-2">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                <circle cx="12" cy="12" r="2" fill="currentColor" opacity="0.7"/>
              </svg>
            </div>
            <span className="brand-text">
              E T E R N A L S
              <small className="brand-subtitle d-block">Celestial Mandate made Eternal</small>
            </span>
          </NavLink>

          <button 
            className="navbar-toggler eternal-toggler" 
            type="button" 
            onClick={toggleMenu}
            data-bs-toggle="collapse" 
            data-bs-target="#navbarColor01" 
            aria-controls="navbarColor01" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
          >
            <div className={`toggler-lines ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink 
                  className="nav-link eternal-nav-link" 
                  to="/home" 
                  activeclassname="active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="nav-link-content">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
                      <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z"/>
                    </svg>
                    <span>Home</span>
                    <div className="nav-underline"></div>
                  </div>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink 
                  className="nav-link eternal-nav-link" 
                  to="/About" 
                  activeclassname="active"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="nav-link-content">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 6.5V4.5C15 3.57 14.43 3 13.5 3H10.5C9.57 3 9 3.57 9 4.5V6.5L3 7V9L9 8.5V21H11V16H13V21H15V8.5L21 9Z"/>
                    </svg>
                    <span>About Us</span>
                    <div className="nav-underline"></div>
                  </div>
                </NavLink>
              </li>

              {currentUser.role === 'admin' && (
                <li className="nav-item">
                  <NavLink 
                    className="nav-link eternal-nav-link admin-link" 
                    to="/eternals"
                    activeclassname="active"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="nav-link-content">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="nav-icon">
                        <path d="M17,17H7V7H17M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3Z"/>
                      </svg>
                      <span>Eternals Status</span>
                      <div className="admin-badge-mini">ADMIN</div>
                      <div className="nav-underline"></div>
                    </div>
                  </NavLink>
                </li>
              )}
            </ul>

            {/* Enhanced user section */}
            <div className="navbar-nav">
              <div className="user-section d-flex align-items-center">
                <div className="user-avatar me-2">
                  <div className="avatar-circle">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <span className="navbar-text eternal-user-greeting me-3">
                  <span className="greeting-text">Welcome,</span>
                  <span className="user-name">{currentUser.name}</span>
                  {currentUser.role === 'admin' && (
                    <span className="role-badge">ADMIN</span>
                  )}
                </span>
                <button 
                  className="btn eternal-logout-btn" 
                  onClick={onLogout}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="me-1">
                    <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"/>
                  </svg>
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
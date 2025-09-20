import { NavLink } from "react-router-dom";

function Nav({ currentUser, onLogout }) {

  if (!currentUser) {
    return null;
  }
  return (
    <div className="Nav">
      <nav className={`navbar navbar-expand-lg eternal-navbar ${currentUser.theme}`} data-bs-theme="dark">
        <div class="container-fluid">
          <NavLink clasName="nav-brand" to="/home">Portfolio Proj</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <NavLink className="nav-link" to="/home" activeclassname="active">Home
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/About" activeclassname="active">About Us
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>
              {currentUser.role === 'admin' && (
                <li className="nav-item">
                  <NavLink className="nav-link eternal-nav-link admin-only" to="/eternals">
                    Eternals Status
                  </NavLink>
                </li>
              )}
              {/* <li class="nav-item">
                <a class="nav-link keychainify-checked" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link keychainify-checked" href="#">Contact</a>
              </li> */}
            </ul>
            <div className="navbar-nav">
              <span className="navbar-text me-3 eternal-user-greeting">
                Welcome, {currentUser.name}
              </span>
              <button className="btn btn-outline-light btn-sm eternal-logout-btn" onClick={onLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* <h1>Hello World</h1>
      <button type="button" class="btn btn-primary">Primary</button>
      <button type="button" class="btn btn-secondary">Secondary</button> */}
    </div>
  );
}

export default Nav;
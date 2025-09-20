import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
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
                <NavLink className="nav-link" to="/portfolio" activeclassname="active">Portfolio
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/Login" activeclassname="active">Login
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>

              <li class="nav-item">
                <NavLink className="nav-link" to="/Calculator" activeclassname="active">Calculator
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/About" activeclassname="active">About Us
                  {/* <span class="visually-hidden">(current)</span> */}
                </NavLink>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link keychainify-checked" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link keychainify-checked" href="#">Contact</a>
              </li> */}
            </ul>
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
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { stateUser } from "../../store/User/User";
import "./Navigation.styles.css";
import { logout } from "../../store/User/User";
import { useDispatch } from "react-redux";

function Navigation() {
  const user = useSelector(stateUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <span className="navbar-brand">Navbar</span>
          {user.user && (
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"about"}>
                    About
                  </NavLink>
                </li>
                {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to={'#'}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link disabled" to={"contact"}>
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to={"contact"}>
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
          <div className="right-side">
            {!user.user && (
              <NavLink className="btn btn-outline-success " to={"login"}>
                Giriş Yap
              </NavLink>
            )}
            {user.user && (
              <button className="btn btn-outline-danger" onClick={handleLogout} >Çıkış Yap</button>
            )}
            {/* {
              'user:' + user 
              + 
              'isLoading:' + user.isAuthLoading
             } */}
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="container mt-3">
        <Outlet />
      </div>
    </Fragment>
  );
}

export default Navigation;

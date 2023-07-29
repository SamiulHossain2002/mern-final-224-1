/* eslint-disable jsx-a11y/no-redundant-roles */
import React, { useContext } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import watch from "../../../Assets/images/logo-img/logo.jpg";
import { AuthContext } from "../../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log(name);
  return (
    <nav className="navbar navbar-expand-lg bg-primary navber-light bg-light ">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand ms-3">
          <img
            className="nav-img d-inline-block align-top"
            src={watch}
            alt="img"
          />
        </NavLink>
        {/* <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon dropbox">menu</span>
    </button> */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item  ">
              <NavLink className="nav-link " aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            {/* <li className="nav-item  ">
              <NavLink className="nav-link " aria-current="page" to="/cartpage">
                Cart
              </NavLink>
            </li> */}

            <li className="nav-item">
              <NavLink className="nav-link " to="/orders">
                {" "}
                Orders{" "}
              </NavLink>
            </li>

            {user?.uid ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/dashboard">
                    {" "}
                    Dashboard
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/review">
                    {" "}
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link " to="/login">
                    <button
                      onClick={handleLogOut}
                      className="btn btn-danger shadow-lg  bg-body-tertiary rounded"
                    >
                      Sign Out
                    </button>
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <NavLink className="nav-link " to="/login">
                  Login
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;

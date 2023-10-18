import React from "react";
import logo_image from "../assets/logo_image.png"
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="container navbar navbar-expand-lg">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  <img src={logo_image} className="logo_image" />
                </Link>
              </li>
            </ul>
            <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to={'/'} >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active fs-5" aria-current="page" to={'/about'} >
                  About
                </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link active fs-5" to={'/register'}> Sign In </Link>
                

              </li>
            </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

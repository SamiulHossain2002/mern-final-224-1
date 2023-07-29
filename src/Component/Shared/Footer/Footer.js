import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../../../Assets/images/logo-img/facebook.svg";
import GitHub from "../../../Assets/images/logo-img/github.svg";

const Footer = () => {
  return (
    <footer className="py-5 mt-4">
      <div className="ms-5 me-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p>
              Millions of people of all ages and form around the world are
              improving their life with us
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-center">Outline</h5>
            <ul className="list">
              <li>
                <Link to="/">Exclusive</Link>
              </li>
              <li>
                <Link to="/">Exceptional</Link>
              </li>
              <li>
                <Link to="/">Explore</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <h5 className="text-center">Duration</h5>
            <ul className="list">
              <li>
                <Link to="/">January-March</Link>
              </li>
              <li>
                <Link to="/">April-September</Link>
              </li>
              <li>
                <Link to="/">October-December</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-center text-white mt-4">
            Copyrighy & copy 2023 watch project with MD.SAMIUL HOSSAIN <br />
            Contact Me @
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=100079184449477"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img height="50px" width="50px" src={facebook} alt="Facebook" />
            </a>
            <a
              href="https://github.com/SamiulHossain2002"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img height="50px" width="50px" src={GitHub} alt="GitHub" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

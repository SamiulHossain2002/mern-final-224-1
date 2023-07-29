import React from "react";
import Header from "../Component/Shared/Header/Header";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Component/Shared/Footer/Footer";

const DashboardLayout = () => {
  return (
    <div className="">
      <Header></Header>
      <div className="d-flex my-5 h-100 w-auto">
        <div className="col-3">
          <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="navbarNav1"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div>
                <Link
                  to="/dashboard/mypanel"
                  className="btn btn-outline-secondary mb-3"
                  aria-current="page"
                >
                  My Panel
                </Link>

                <br />

                <Link
                  to="/dashboard/allusers"
                  className="btn btn-outline-secondary mb-3"
                  aria-current="page"
                >
                  All Users
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-9">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;

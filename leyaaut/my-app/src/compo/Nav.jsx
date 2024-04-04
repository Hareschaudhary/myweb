import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <>
      <nav  class="navbar navbar-expand-lg  navbar-dark bg-primary pt-3 pb-3  border-bottom ">
        <div class="container-fluid align-items-center d-flex">
          <a class=" d-flex   d-flex align-items-center " href="#">
          <p className="p-one p-0 m-0"></p>
            <p className="p-two p-0 m-0"></p>
            <p className="p-three p-0 m-0"></p>
            <p class="nav-link active text-white playfair p-0 m-0 ps-1 pb-2"  href="#">
                medium
              </p>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav d-flex w-100 justify-content-end fs-4">
              <a class="nav-link text-white " aria-current="page" href="#">
                our story
              </a>
              <a class="nav-link text-white" href="#">
                membership
              </a>
              <a class="nav-link text-white" href="#">
                write
              </a>
              <a
                class="nav-link text-white"
                href="#"
              >
                sign in
              </a>
              <a
              style={{borderRadius:"30px"}}
                class="btn text-white bg-dark ps-4  pe-4   fs-5 "
                href="#"
              >
                get unlimited access
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

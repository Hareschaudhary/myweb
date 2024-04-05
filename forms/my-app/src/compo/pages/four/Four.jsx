import React from "react";
import "./four.css";
import one from "../img/cone.png";
const Four = () => {
  return (
    <>
      <div className="">
        <nav class="navbar navbar-expand-lg border-bottom border-2  navbar-light bg-light   pt-sans-regular">
          <div class="container-fluid">
            <a class="navbar-brand dancing text-danger" href="#">
              hares chaudhary
            </a>
            <button
              className="navbar-toggler bg-dark shadow border border-4 border-dark"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon "></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-1 pt-2 text-dark">
                <li class="nav-item">
                  <a class="nav-link  text-dark" aria-current="page" href="#">
                    inspiration
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark" href="#">
                    find work
                  </a>
                </li>

                <li class="nav-item">
                  <a class="nav-link text-dark " href="#">
                    learn design
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark " href="#">
                    Go pro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark " href="#">
                    Hire designers
                  </a>
                </li>
              </ul>
              <form class="d-flex ">
                <input
                  class="form-control me-3"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <i
                  style={{ color: "rgb(157,159,169)" }}
                  class="bi bi-bag-check-fill me-3 h4 mt-2"
                ></i>
                <img
                  className="me-3"
                  style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  src={one}
                  alt=""
                />
                <button class="btn btn-danger" type="submit">
                  upload
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
      <div className="container-fluid bg-white pt-5">
        <div className="col-lg-6 col-12 m-auto text-center pt-sans-regular p-5">
          <p className="h1 fw-semibold  pt-sans-regular">
            please verify your email
          </p>
          <p>
            <i style={{ fontSize: "80px" }} class="bi bi-envelope-check co"></i>
          </p>
          <p className="co">
            please verify your email address. we've sent a confirmation email to
          </p>
          <p className="h3 fw-bold">hareschaudhary34@gmail.com</p>
          <p className="co">
            click the confirmation link in that email to begin using dribbble
          </p>
          <p className="co">
            didn't receive the email sheck your spam folder it may hav been
            caught by a filter if you still don't see it you can{" "}
            <span className="text-danger fw-bold">
              {" "}
              <a className=" text-danger" href="#">
                {" "}
                resend the confirmation email{" "}
              </a>
            </span>
          </p>
          <p className="co d-flex justify-content-center align-items-center">
            <p>wrong email address ?</p>
            <p className=" text-danger fw-bold  fw-semibold">
              {" "}
              <a className="nav-link text-danger" href="#">
                Chang it
              </a>
            </p>
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "rgb(250,250,250)" }}
        className="container-fluid"
      >
        <footer className="co">
          <div className="row flex-wrap row-cols-1 justify-content-center justify-content-sm-between flex-lg-nowrap row-cols-sm-3 row-cols-lg-6 row-cols-sm-3 row-cols-1">
            <div className="col col-lg-2 text-center text-sm-start order-5 order-sm-0">
              <ul class="nav flex-column co">
                <li class="nav-item">
                  <a class="nav-link text-danger dancing h3 fw-bold" href="https://myweb-pskg.vercel.app/">
                    haresh chaudhary
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="https://myweb-pskg.vercel.app/">
                   hello sir mam this is a my project link 
                  </a>
                </li>
              </ul>
              <ul class="nav justify-content-sm-start justify-content-center flex-nowrap my-i">
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    <i class="bi bi-brilliance co"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-twitter co"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <i class="bi bi-facebook co"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    <i class="bi bi-instagram co"></i>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link " href="#">
                    <i class="bi bi-whatsapp co"></i>
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
            <div className="col text-center text-sm-start">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link  text-dark h4 fw-semibold" href="#">
                    Go pro
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Explore desig work
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Design blog
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Overtime podcast
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Playoffs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Weekly warm-up
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Reafer a freand
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Code Of conduct
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
            <div className="col text-center text-sm-start">
              <ul class="nav flex-column">
              <li class="nav-item">
                  <a class="nav-link  text-dark h4 fw-semibold" href="#">
                    hire designers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co " href="#">
                    Post a job opening
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    post a freelance project
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Search for designers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  text-dark fw-semibold" href="#">
                    Brand
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    advertise with us
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
            <div className="col text-center text-sm-start">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link fw-semibold  text-dark h4" href="#">
                    company
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    careers
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    support
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    media kit
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Testomonials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Api
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Terms of service
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    privacy policy
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    cookie policy
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
            <div className="col text-center text-sm-start">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link  text-dark h4 fw-semibold" href="#">
                    Directories
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Design jobs
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Designers for hire
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Freelance Designers for hire
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Tags
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Places
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  text-dark h4 fw-semibold" href="#">
                    Desgin assets
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Dribbble marketplace
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Creative Market
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Fontspring
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                    Font Squirrel
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
            <div className="col text-center text-sm-start">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <a class="nav-link  text-dark h4" href="#">
                    Design Resources
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                    Design Hiring
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link co" href="#">
                  Design Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                  Design Education
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                  Creative Process
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link  co" href="#">
                  Design Industry Trends
                  </a>
                </li>
              </ul>
              <p style={{height:"2px"}} className="bg-dark w-100 d-sm-none d-block"></p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};
export default Four;

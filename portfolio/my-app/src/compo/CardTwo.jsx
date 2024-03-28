import React, { useContext } from "react";
import "./cardtwo.css"
import one from './img/cone.png'
import two from './img/ctwo.png'
import Usecontaxt from "../store/Usecontaxt";

const CardTwo = () => {
    const{switc}=useContext(Usecontaxt)
  return (
    <>
      <div>
        <div style={{backgroundColor:switc ? "rgb(31,30,43)" : "rgb(248,249,255)"}} className="container mt-3  pb-5">
          <div className="row justify-content-center text-center pt-2 pb-2">
            <div className="col-12 fs-1 fw-bold">
              <p>Collection Spotlight</p>
            </div>
            <div className="col-lg-10 m-auto fs-5">
              <p>
                Discover extraordinary moments with our Spotlight Collection
                metatickets—exclusive access to premium events for an
                unforgettable experience. Grab yours today!
              </p>
            </div>
          </div>

          <div
            id="carouselExampleControls"
            class="carousel slide w"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div class={`${switc ? " bgwhite "  :  " bg "} cards text-center`}>
                  <img src={one} class=" w-100" alt="..." />
                  <div class="card-body ">
                    <h5 class="card-title">Las Vegas Aviators</h5>
                    <p class="card-text">Oct 15 sun 4:30 PM  </p>
                    <p class="card-text">Las Vegas Ballpark, Las Vegas, Nevada</p>
                    <a style={{width:"86%"}} href="#" class="btn btn-dark  ">
                    Take Flight Collection
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div class={`${switc ? " bgwhite "  :  " bg "} cards text-center`}>
                  <img style={{height:"543px"}} src={two} class=" w-100" alt="..." />
                  <div class="card-body ">
                    <h5 class="card-title">Sacramento River Cats</h5>
                    <p class="card-text">Oct 15 sun 4:30 PM  </p>
                    <p class="card-text">Sutter Health Park, Sacramento, California</p>
                    <a style={{width:"86%"}} href="#" class="btn btn-dark  ">
                    Orange Collection
                    </a>
                  </div>
                </div>
              </div>
              <div class="carousel-item">
              <div class={`${switc ? " bgwhite "  :  " bg "} cards text-center`}>
                  <img src={one} class=" w-100" alt="..." />
                  <div class="card-body ">
                    <h5 class="card-title">Las Vegas Aviators</h5>
                    <p class="card-text">Oct 15 sun 4:30 PM  </p>
                    <p class="card-text">Las Vegas Ballpark, Las Vegas, Nevada</p>
                    <a style={{width:"86%"}} href="#" class="btn btn-dark  ">
                    Take Flight Collection
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTwo;

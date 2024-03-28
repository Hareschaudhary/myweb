import React, { useContext } from "react";
import Usecontaxt from "../store/Usecontaxt";

const Nav = () => {
  const{switc,setswitc}=useContext(Usecontaxt);
  return (
    <>
      <header className="pt-3 pb-3" style={{backgroundColor: switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}>
        <div className="container ">
          <nav className=" d-flex justify-content-between w-100 align-items-center">
            <div>
              <a className={`${switc ? " text-white " :" text-dark "}text-decoration-none fs-3 fw-bold text-decoration-underline` }href="#">sports </a>
            </div>
            <div   class="form-check form-switch">
              <input
              style={{width:"50px",height:"25px"}}
              onClick={()=>setswitc(!switc)}
                class="form-check-input "
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
              </label>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Nav;

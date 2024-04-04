import React from "react";
import Btn from "../Btn";
import "./first.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {useFormik} from "formik"
import Yupform from "./Yupform";

const First = () => {
    const {values,errors,handleSubmit,handleChange,handleBlur}=useFormik({
        initialValues:{ name:"",username:"",email:"",password:"",check:""},
        validationSchema:Yupform,
        onSubmit:(values)=>{
        //    console.log(values)
           console.log(errors)
        }

    })
  return (
    <>
      <div className=" container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 d-none d-lg-block img">
            <div  className="  d-flex flex-column justify-content-sm-between pt-5 mt-5">
                <div className="row">
                    <div className="col-12 text-center pb-5 mb-5">
                        <p className="fs-1 fw-bold text-white">discover the world,s top designers & creatives</p>
                    </div>
                </div>
                <div className="row pt-5 mt-5">
                    <div className="col-12 pt-5 mt-5">
                        <p style={{color:"rgb(43,42,45)",textShadow:"0px 0px 1px white"}} className="pt-5 ps-5 ms-5 mt-5 fs-4 fw-bold  ">art bt haresh chaudhary</p>
                    </div>
                </div>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
                <div className="col-12 d-flex justify-content-end">
                    <p className="p-0 m-0 fs-6 pe-2">already a meaber ?  <a className=" d-inline-block m-0 p-0 text-decoration-none" href="">sign in</a></p>
                   {/* <a className=" text-primary nav-link"> already a meaber ?  </a><a href="#" className="nav-link "> sign in</a> */}
                </div>
            </div>

            <form onSubmit={handleSubmit} action="">
              <div className="row p-5 me-5 ms-5">
                <div className="col-12  ">
                  <p className=" fs-2 fw-bold ">sign up to dribble</p>
                </div>
                <div className="col-12 pt-2 ">
                  <p className="fs-5  text-danger">errror</p>
                </div>
                <div className="col-12 pt-2 pb-3 col-lg-6">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="name">
                     NAMe
                  </label>
                  <input
                    id="name"
                    type="text"
                    class="w-100 b"
                    placeholder="First name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12 pt-2 pb-3 col-lg-6">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="username">
                    enter your username
                  </label>
                  <input
                    id="username"
                    type="text"
                    class="w-100 b"
                    placeholder="username"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12 pt-2 pb-3">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="email">
                    enter your email
                  </label>
                  <input
                    id="email"
                    type="email"
                    class="w-100 b"
                    placeholder="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12 pt-2 pb-3">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="password">
                    enter your password
                  </label>
                  <input
                    id="password"
                    type="password"
                    class="w-100 b"
                    placeholder="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </div>
                <div className="col-12 pt-2 pb-3  ">
                 <div className="form-check">
                 <input
                    type="checkbox"
                    class="form-check-input p-1"
                    id="exampleCheck1"
                    name="check"
                    value={values.check}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label class="form-check-label" for="exampleCheck1">
                    creating an account means your okay with our{" "}
                    <span className="  text-primary ">
                      terms of servise privacy policy{" "}
                    </span>{" "}
                    and our defult{" "}
                    <span className="  text-primary ">
                      notification settings
                    </span>
                  </label>
                 </div>
                
                </div>
                <div className="col-12 pt-2 pb-3 position-relative">
                  <button
                    style={{ border: "none", backgroundColor: "transparent" }}
                    type=" submite"
                  >
                    <Btn  text="create account" />{" "}
                  </button>
                </div>
                <div className="col-12 pt-2 pb-3">
                  <p>
                    this site is protected by <sub>re</sub>CAPTCHA and the
                    google{" "}
                    <span className="  text-primary ">privacy policy</span> and{" "}
                    <span className="  text-primary">terms of service</span>{" "}
                    applyc
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;

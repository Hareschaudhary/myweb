import React, { useEffect, useState }  from "react";
import "./first.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useFormik } from "formik";
import ValidationSchema from "./Yupform";
import { NavLink } from "react-router-dom";

const First = () => {
  let [valid,setvalid]=useState(false)
  const { values, errors, handleSubmit, handleChange, handleBlur } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      check: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values,action) => {
        
    },
  });
  useEffect(()=>{
    if (values.name.length >2 && values.check == true && values.email.length > 5 && values.password.length > 4 && values.username.length >2) {
      setvalid(true)
    } else {
      setvalid(false)
    }
  },[values])
  return (
    <>
      <div className=" container-fluid">
        <div className="row">
          <div style={{height:"100vh"}} className="col-12 col-lg-6 d-none d-lg-block img p-0 m-0">
            {/* <div className="  d-flex flex-column justify-content-sm-between pt-5 mt-5">
              <div className="row">
                <div className="col-12 text-center pb-5 mb-5">
                  <p className="fs-1 fw-bold text-white">
                    discover the world,s top designers & creatives
                  </p>
                </div>
              </div>
              <div className="row pt-5 mt-5">
                <div className="col-12 pt-5 mt-5">
                  <a
                    style={{
                      color: "rgb(43,42,45)",
                      // textShadow: "0px 0px 1px white",
                    }}
                    className="pt-5 ps-5 ms-5 mt-5 fs-4 fw-bold nav-link pro "
                    href="https://myweb-pskg.vercel.app/"
                  >
                    art by haresh chaudhary
                  </a>
                </div>
              </div>
            </div> */}
            <div class="frame"></div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12 d-flex justify-content-end pt-3">
                <p className="p-0 m-0 fs-6 pe-2">
                  already a meaber ?{" "}
                  <a
                    className=" d-inline-block m-0 p-0 text-decoration-none"
                    href="https://myweb-pskg.vercel.app/"
                  >
                    sign in
                  </a>
                </p>
                {/* <a className=" text-primary nav-link"> already a meaber ?  </a><a href="#" className="nav-link "> sign in</a> */}
              </div>
            </div>

            <form onSubmit={handleSubmit} action="">
              <div className="row p-5 me-5 ms-5">
                <div className="col-12  ">
                  <p className=" fs-2 fw-bold ">sign up to dribble</p>
                </div>
                <div className="col-12 pt-2 ">
                  <p className={`${ valid ? " text-success " : " text-danger "}fs-5`}>{valid ? "go next page" : "please fill the details in the form"}</p>
                </div>
                <div className="col-12 pt-2 pb-3 col-lg-6">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="name">
                    NAME
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
                  <p className=" text-danger fs-6 fw-light">{errors.name}</p>
                </div>
                <div className="col-12 pt-2 pb-3 col-lg-6">
                  <label className="fs-6 pb-1 fw-bold" htmlFor="username">
                    username
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
                  <p className=" text-danger fs-6 fw-light">
                    {errors.username}
                  </p>
                </div>
                <div className="col-12 pt-2 pb-3">
                  <label
                    className="fs-6 pb-1 fw-bold text-uppercase"
                    htmlFor="email"
                  >
                    email
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
                  <p className=" text-danger fs-6 fw-light">{errors.email}</p>
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
                  <p className=" text-danger fs-6 fw-light">
                    {errors.password}
                  </p>
                </div>
                <div className="col-12 pt-2 pb-3  ">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input p-1 border border-2 border-dark"
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
                  <div class="wrapper">
                    <NavLink
                      className="a"
                      style={{ textDecoration: "none", color: "white",width:"200px" }}
                      to={valid ? "/two" : "#"}
                    >
                      <span>create accout</span>
                    </NavLink>
                  </div>
                </div>
                <div className="col-12 pt-2 pb-3">
                  <p >
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

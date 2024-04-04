import React, { useState } from "react";
import './two.css'
import {NavLink}  from "react-router-dom";

function Two() {
  const [file, setFile] = useState();
  const [value, setvalue] = useState();
  const [next, setnext] = useState();

function handleChangeh(e){
    let a =e.target.value;
    if (a.length > 5 && file.length >1) {
        setnext(true)
    }else{
        setnext(false)
    }
    setvalue(a)
}
  function handleChange(e) {
    console.log(e.target.files);

    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
  <>
    {/* <div className="App">
  <h2>Add Image:</h2>
  <input type="file" onChange={handleChange} />
  <img src={file} />
</div> */}
<div className="container-fluid mt-5 pt-5">
    <div className="row">
        <div className="col-12 col-lg-7 m-auto">
            <p className="  h1 fw-bold"> welcome! let's create your profile</p>
            <p style={{color:"rgb(157,158,166)"}} className="h6 "> let others get to know you better you can do these later</p>
        </div>
        <div className="col-12 col-lg-7 m-auto mt-4">
        <p className="  h3 fw-bold"> add an avatar</p>
        </div>
          <div className="col-12 col-lg-7 m-auto d-flex mt-4">
           <label htmlFor="img">
           <div className=" text-center position-relative" style={{width:"200px",height:"200px",borderRadius:"50%",border:"2px dashed rgb(157,158,166)"}}>
           <div className="d-flex justify-content-center align-items-center w-100 h-100">
           <i style={{color:"rgb(157,158,166)"}} class="bi bi-camera-fill  fs-1"></i>
           </div>
            <img className=" position-absolute" style={{width:"100%" ,height:"100%",borderRadius:"50%",top:"0px",left:"0px"}} src={file} />
            </div>
           </label>
            <div className=" ms-5 mt-5">
            <input className=""  id="img" type="file" onChange={handleChange} accept="image/*;capture=camera" />
              <p style={{color:"rgb(157,158,166)"}} className=" fs-5 mt-3 fw-semibold">&gt; or choose one of our defults</p>
            </div>
          </div>
          <div className="col-12 col-lg-7 m-auto  mt-4">
            <label className="h3" htmlFor="location">add your location</label>
             <input value={value} onChange={(e)=>handleChangeh(e)} style={{outline:  "none" ,boxShadow:"0px 1px 0px pink"}} placeholder=" add your location" className="mt-3  w-100 border border-0 border-bottom border-2" type="text" />
             
          </div>
          <div className="col-12 col-lg-7 m-auto  mt-5">
          <div class="wrapper">
                    <NavLink
                      className="a"
                      style={{ textDecoration: "none", color: "white",width:"200px" }}
                      to={next ? "/three" : "#"}
                    >
                      <span>NEXT</span>
                    </NavLink>
                  </div>
          </div>
    </div>
</div>
</>
  );
}

export default Two;

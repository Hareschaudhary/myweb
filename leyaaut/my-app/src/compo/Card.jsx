import React from "react";
import "./nav.css";
import img from "./img/one.png"
import one from "./img/two.png"
import three from "./img/image.png"
const Card = () => {
  return (
    <>
      <div className="container-fluid bg-primary text-white ">
        <div className="row pt-lg-5 pb-lg-5">
          <div className="col-12 text-center ">
            <div className="row">
              <p className="playfair fs-m fw-bold col-12 ">
                fuel great thinking.
              </p>
              <p className=" col-lg-4 col-12 m-auto fs-5">
                become a medium memver to enjoy unlimited access and directly
                support the writers you read most
              </p>
              <div className="col-12">
                <button className="btn rounded-pill bg-white mt-4 mb-4 fs-6 fw-bold ps-3 pe-3 shadow">
                  get unlimitel access
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row borderb pt-3 pb-3 ">
          <div className="col-lg-6 col-12 flex-column p-lg-4 mt-0 mt-sm-3 border-end border-3 border-light">
            <p className="fs-2 fw-bold playfair text-center pb-3">get unlimited access to every story.</p>
             <div className=" position-relative">
            <div id="img" className=" position-absolute w-100 h-100  rounded-3 "></div>
         <img style={{width:"100%",height:"500px"}} className=" m-auto rounded-3 shadow" src={img} alt="" />
         </div>
            <p className=" fs-4 text-center pt-3">
                read any articel in our entire lobrery all you devices with no paywalls . story limits ads
            </p>
            <p className=" border-bottom border-3 border-light d-block d-lg-none"></p>
          </div>
          <div className="col-lg-6 col-12 flex-column p-lg-4 mt-0 mt-sm-3 ">
            <p className="fs-2 fw-bold playfair text-center pb-3">
                spport the voices you want to hear more from
            </p>
         <div className=" position-relative">
            <div id="img" className=" position-absolute w-100 h-100  rounded-3 "></div>
         <img style={{width:"100%",height:"500px"}} className=" m-auto rounded-3 shadow" src={one} alt="" />
         </div>
         <p className=" fs-4 text-center pt-3">
                a portion of your mambership will directly support the writers and thinkers you read the most
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid pt-3 pb-3 ">
        <div className="row  text-dark">
            <div className="col-12">
                <p className="fs-1 text-center playfair fw-bold pt-3 pb-3">
                    why i am medium member
                </p>
            </div>
            <div className="col-lg-6 col-12 ">
              <div className=" d-flex justify-content-around justify-content-lg-end flex-wrap">
              <img style={{width:"200px",height:"200px",borderRadius:"50%"}} src={three} alt="" />
                <p className="ms-lg-2 d-lg-block d-none" style={{width:"150px",height:"200px",borderRadius:"50%",backgroundColor:"rgb(245,80,129)"}}></p>
                <p className="ms-lg-2 d-lg-block d-none" style={{width:"100px",height:"200px",borderRadius:"50%",backgroundColor:"rgb(54,162,67)"}}></p>
              </div>
            </div>
            <div className="col-lg-4 col-12 fs-5 pe-lg-5 d-flex flex-column justify-content-center">
                <p className="fs4 fw-bold">i love medium membership it gives me access to the stories i love by writers i love ane it allows me to help support those writers financially</p>
                <p  className="fs3 fw-bold">kayt milina</p>
               <p className="ms-5"> <i class="fa-solid fa-arrow-right fs-2 ms-5"></i></p>
            </div>
        </div>
      </div>
      <div style={{backgroundColor:"rgb(188,222,255)"}} className="container-fluid border-bottom border-top border-2 border-dark position-relative">
      <div className="box position-absolute "></div>
        <div className="row pt-5 pb-5 ">
            <div className="col-12 text-center pb-5 pt-5  ">
                <p className="fs-1 playfair fw-bold ">take your mind <br/> in new directions.</p>
                <button className="btn rounded-pill btn-dark shadow">get unlimited access</button>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="d-flex justify-content-lg-between justify-content-center  align-items-center flex-wrap">
            <a className="fs-1 fw-bold text-dark text-decoration-none" href="#">medium</a>
            <a className="fs-4  text-dark text-decoration-none" href="#">every idea needs a midium</a>
            <div className="m-0 p-0 ">
               <a className="text-dark ms-3" href="#">about</a>
               <a className="text-dark ms-3" href="#">terms</a>
               <a className="text-dark ms-3" href="#">privacy</a>
               <a className="text-dark ms-3" href="#">help</a>
            </div>
        </div>
      </div>
    </>
  );
};
export default Card;

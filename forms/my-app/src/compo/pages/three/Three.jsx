import React, { useEffect, useState } from 'react'
import one from "../img/cone.png"
import two from "../img/ctwo.png"
import three from "../img/cthree.png"
import "./three.css"
import { NavLink } from 'react-router-dom'

const Three =()=>{
  let [value,setvalue]=useState()
  let [next,setnext]=useState(false)
useEffect(()=>{
    if (value =="one") {
        setnext(true)
      } else if(value =="two") {
        setnext(true)
      }else if(value =="three") {
        setnext(true)
      }else{
        setnext(false)
      }
},[value])
    return(
        <>
        <div className="container">
            <div className="row pt-5">
                <div className="col-12">
                     <p className='h1 text-center fw-bold text-capitalize'>
                        what brings you to dribbble
                     </p>
                     <p className='text-center fs-5 fw-semibold' style={{color:"rgb(156,157,163)"}}>
                        select the options that best describe you bon'n worry you can explore other options later
                     </p>
                </div>
            </div>
        <div className="row mt-5 pt-5 justify-content-between">
          {value != "one" &&   <div style={{height:"400px"}}  className=" position-relative col-lg-3 mt-lg-0 mt-5 col-12 shadow rounded-3 m-3">
                <div >
                    <img style={{height:"240px",backgroundColor:"transparent"}} className='w-100 ' src={one} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='p-5 fs-3' value="one" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
               {value == "one" &&   <div style={{height:"400px",border:"2px solid red"}}  className=" mt-lg-0 mt-5 position-relative col-lg-3 col-12 shadow rounded-3 m-3">
                <div style={{height:"160px",position:"relative"}}>
                    <img style={{top:"-60px"}} className='w-100 h-100  position-absolute' src={one} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div>
                    <p className='text-center fs-5 text-dark fw-semibold'>with over 7 million shots from a vast community of designes dribble is the leading source for design inspiration</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='p-5 fs-3' value="one" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
                     {value != "three" &&   <div style={{height:"400px"}}  className=" mt-lg-0 mt-5 position-relative col-lg-3 col-12 shadow rounded-3 m-3">
                <div >
                    <img style={{height:"240px"}} className='w-100 ' src={two} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='p-5 fs-3' value="three" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
               {value == "three" &&   <div style={{height:"400px",border:"2px solid red"}}  className=" mt-lg-0 mt-5 position-relative col-lg-3 col-12 shadow rounded-3 m-3">
                <div style={{height:"160px",position:"relative"}}>
                    <img style={{top:"-60px"}} className='w-100 h-100  position-absolute' src={two} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div>
                    <p className='text-center fs-5 text-dark fw-semibold'>with over 7 million shots from a vast community of designes dribble is the leading source for design inspiration</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='p-5 fs-3' value="three" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
                     {value != "two" &&   <div style={{height:"400px"}}  className=" mt-lg-0 mt-5 position-relative col-lg-3 col-12 shadow rounded-3 m-3">
                <div >
                    <img style={{height:"240px"}} className='w-100 ' src={three} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='option-input radio' value="two" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
               {value == "two" &&   <div style={{height:"400px",border:"2px solid red"}}  className=" mt-lg-0 mt-5 position-relative col-lg-3 col-12 shadow rounded-3 m-3">
                <div style={{height:"160px",position:"relative"}}>
                    <img style={{top:"-60px"}} className='w-100 h-100  position-absolute' src={three} alt="" />
                </div>
                <div  className='text-center'>
                    <p className=' h3'>i'm desginer looking to share my work</p>
                </div>
                <div>
                    <p className='text-center fs-5 text-dark fw-semibold'>with over 7 million shots from a vast community of designes dribble is the leading source for design inspiration</p>
                </div>
                <div className='text-center mb-5'>
                    <input style={{height:"20px",width:"20px"}}  className='option-input radio' value="two" onChange={(e)=>setvalue(e.target.value)} name='radio' type="radio" />
                </div>
            </div>
            }
        </div>
        <div className="row mt-5 mb-3">
            <div className="col-12 d-flex justify-content-center">
            <div class="wrapper">
                    <NavLink
                      className="a"
                      style={{ textDecoration: "none", color: "white",width:"200px" }}
                      to={next ? "/four" : "#"}
                    >
                      <span>finish</span>
                    </NavLink>
                  </div>
            </div>
        </div>
        </div>
      
        </>
    )
}
export default Three
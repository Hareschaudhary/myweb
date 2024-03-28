import React, { useContext } from 'react'
import one from './img/one.png'
import two from './img/two.png'
import three from './img/three.png'
import four from './img/four.png'
import five from './img/five.png'
import Usecontaxt from '../store/Usecontaxt';
import './cardone.css'
import Btn from './Btn'
import CardTwo from './CardTwo'
const CardOne=()=>{
    const{switc}=useContext(Usecontaxt)
    return(
        <>
        <div  style={{backgroundColor: switc ? "rgb(41,43,50" : "rgb(248,248,250)",color:switc ? "rgb(248,248,250" : "rgb(41,43,50"}}>
            <div  className="container pt-5 pb-5">
                <div  className="h row row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-1 justify-content-around gap-2 flex-lg-nowrap">
                   <div style={{backgroundColor:switc ? "rgb(59,62,72" : "rgb(255,255,255)"}} className="col shadow p-2 ">
                    <div>
                    <img className='w-100 ' src={one} alt="" />
                    </div>
                        <div>
                            <p className=' fs-5 fw-bold pt-2 '>
                            Sacramento River Cats
                            </p>
                        </div>
                       <div style={{backgroundColor:switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}  className="row justify-content-between ms-1 me-1">
                        <div className="col-6 fs-6 fw-bold">
                            <p>total events</p>
                            <p>48 Events</p>
                        </div>
                        <div className="col-6 fs-6 fw-bold">
                            <p>sport</p>
                            <p>Baseball</p>
                        </div>
                       </div>
                   </div>
                   <div style={{backgroundColor:switc ? "rgb(59,62,72" : "rgb(255,255,255)"}} className="col shadow p-2 ">
                    <div>
                    <img className='w-100 ' src={two} alt="" />
                    </div>
                        <div>
                            <p className=' fs-5 fw-bold pt-2 '>
                            Las Vegas Aviators
                            </p>
                        </div>
                       <div style={{backgroundColor:switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}  className="row justify-content-between ms-1 me-1">
                        <div className="col-6 fs-6 fw-bold">
                            <p>total events</p>
                            <p>48 Events</p>
                        </div>
                        <div className="col-6 fs-6 fw-bold">
                            <p>sport</p>
                            <p>Baseball</p>
                        </div>
                       </div>
                   </div>
                   <div style={{backgroundColor:switc ? "rgb(59,62,72" : "rgb(255,255,255)"}} className="col shadow p-2 ">
                    <div>
                    <img className='w-100 ' src={three} alt="" />
                    </div>
                        <div>
                            <p className=' fs-5 fw-bold pt-2 '>
                            new jersey devils
                            </p>
                        </div>
                       <div style={{backgroundColor:switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}  className="row justify-content-between ms-1 me-1">
                        <div className="col-6 fs-6 fw-bold">
                            <p>total events</p>
                            <p>48 Events</p>
                        </div>
                        <div className="col-6 fs-6 fw-bold">
                            <p>sport</p>
                            <p>Baseball</p>
                        </div>
                       </div>
                   </div>
                   <div style={{backgroundColor:switc ? "rgb(59,62,72" : "rgb(255,255,255)"}} className="col shadow p-2 ">
                    <div>
                    <img className='w-100 ' src={four} alt="" />
                    </div>
                        <div>
                            <p className=' fs-5 fw-bold pt-2 '>
                            Las Vegas Aviators
                            </p>
                        </div>
                       <div style={{backgroundColor:switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}  className="row justify-content-between ms-1 me-1">
                        <div className="col-6 fs-6 fw-bold">
                            <p>total events</p>
                            <p>48 Events</p>
                        </div>
                        <div className="col-6 fs-6 fw-bold">
                            <p>sport</p>
                            <p>Baseball</p>
                        </div>
                       </div>
                   </div>
                   <div style={{backgroundColor:switc ? "rgb(59,62,72" : "rgb(255,255,255)"}} className="col shadow p-2 ">
                    <div>
                    <img className='w-100 ' src={five} alt="" />
                    </div>
                        <div className='p-3'>
                            <p className=' fs-5 fw-bold pt-2 '>
                            Advertisement title
                            </p>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                       {/* <div style={{backgroundColor:switc ? "rgb(41,43,50" : "rgb(248,248,250)"}}  className="row justify-content-between ms-1 me-1">
                        <div className="col-6 fs-6 fw-bold">
                            <p>total events</p>
                            <p>48 Events</p>
                        </div>
                        <div className="col-6 fs-6 fw-bold">
                            <p>sport</p>
                            <p>Baseball</p>
                        </div>
                       </div> */}
                   </div>
                </div>
            </div>
         <div className="container text-center pb-3 ">
         <Btn/>
         </div>
         <div className="container">
         <CardTwo/>
         </div>
        </div>
        </>
    )
};

export default CardOne
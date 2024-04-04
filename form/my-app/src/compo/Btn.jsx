import React from "react";
import './btn.css'

const Btn = ({text}) => {
  return (
    <>
      <div class="wrapper">
        {/* <button className="a"></button> */}
        <a className="a" style={{textDecoration:"none",color:"white"}} href="#">
          <span>{text}</span>
        </a>
      </div>
    </>
  );
};
export default Btn;

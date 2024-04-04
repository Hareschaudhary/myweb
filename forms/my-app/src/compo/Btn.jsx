import React from "react";
import './btn.css'

const Btn = ({text,href}) => {
  return (
    <>
      <div class="wrapper">
        <a className="a" style={{textDecoration:"none",color:"white"}} href={href}>
          <span>{text}</span>
        </a>
      </div>
    </>
  );
};
export default Btn;

import React from "react";
import './Cardk.css'
import { Link } from "react-router-dom";
const Cardk = ({ image, name, field }) => {
  return (
    <>
      <div className="docNurseContainer"  style={{marginLeft:"35%", height:"33vh"}}>
        <div
          style={{
            backgroundImage: `url(${image})`,
            width: "450px",
            height: "110px",
            borderRadius: "75px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            marginTop:"18%"
          }}
        ></div>
        <div className="docNurseDescription">
          <p className="doci"> {name}</p>
          <p className="cari">{field}</p>
          <Link to={"/teacherpage"}>more info</Link>
        </div>
      </div>
    </>
  );
};

export default Cardk;

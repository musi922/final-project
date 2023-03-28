import React from "react";
import './Cardk.css'
import { Link } from "react-router-dom";
const Cardk = ({ image, name, field }) => {
  return (
    <>
      <div className="docNurseContainer">
        <div
          style={{
            backgroundImage: `url(${image})`,
            width: "150px",
            height: "150px",
            borderRadius: "75px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="docNurseDescription">
          <p className="doci"> {name}</p>
          <p className="cari">{field}</p>
          <Link to="/appointmentBooking">
            <p className="appointment"> <Link to={"/TeacherPage"}>  More Info</Link>  </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Cardk;

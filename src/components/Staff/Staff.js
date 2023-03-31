import React from 'react'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
import './Staff.css'
import {IoSearchOutline} from 'react-icons/io5'
import StaffCard from './staffCard';
import prof1 from '../../assets/image/recourses/prof1.jpg'
import prof2 from '../../assets/image/recourses/prof2.jpg'
import b1 from '../../assets/image/recourses/b1.jpg'
import be from '../../assets/image/recourses/be.jpg'
import bb from '../../assets/image/recourses/bb.jpg'
import blac from '../../assets/image/recourses/blac.jpg'
import Cardk from "../card-kvn/Cardk"
import { Link } from 'react-router-dom'
import '../Account.css'

import { useState, useEffect } from "react";
import axios from 'axios';


const Staff = () => {
  const[features ,setfeatures]= useState([])
  const [hospitals, setHospitals] = useState([]);
  const [showTopSearches, setShowTopSearches] = useState(true);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0MjI3YTRjMjE2ZmE1NzU0Nzc5YTlkYSIsImZpcnN0TmFtZSI6IkRvZSIsImxhc3ROYW1lIjoiTGVzbGllIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRwcnB5bFUydU96bnFTelB5OG9obDZlcldDUVR5RC41WVZwYzkvZXNuT1BTWjlXS0xIYXBaSyIsImRhdGVPZkJpcnRoIjoic3RyaW5nIiwibGV2ZWwiOiJzdHJpbmciLCJzY2hvb2xJZCI6InN0cmluZyIsInJvbGUiOiJhZG1pbiIsImNyZWF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDMtMjhUMDU6MjU6MzIuMDkxWiIsIl9fdiI6MH0sImlhdCI6MTY4MDAwNTUyNH0.xYncUT_FqiR6iNbkifSAKHIbFB0GoxuAvDRxoyfg0z0`,
      },
    };
    axios
      .get(
        "https://new-generation.onrender.com/Admin/GetAllTeacher",
        config
      )
      .then((response) => {
        setfeatures(response.data.teacher);
        console.log(typeof features);

        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const [searchText, setSearchText] = useState("");
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://new-generation.onrender.com/Search/users?firstName=${searchText}`
        // { specialization: searchText }
      );
      console.log(response);
      const data = response.data;

      setHospitals(data.users);
    } catch (error) {
      console.error(error);
    }
    setShowTopSearches(false);
    console.log(searchText);
  };

  return (
    <div>
      <Navigation/>
      <div><img src={image} alt="not found" style={{height: "55vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
        <div style={{marginTop:"-15%", position:"absolute", color: "white", marginLeft: "43%"}}>
        <h1 style={{marginLeft: "-15%"}}>Welcome prospective new students</h1>
        <p1 style={{color: "white", fontSize:"22px",}}><button className='readmored' style={{color: "white", fontSize:"22px", marginLeft:"-42%", marginTop:"3%"}}><Link to={"/TeachersLoginpage"} style={{color:"white", textDecoration:"none",
    }}>Login</Link></button></p1>
        
        
      </div>
      
      <div className='t-part_1'>
      <p className='t-head'>  Annoucements </p>
      <p className='t-head_content'> <marque> We make a new Registration!!, 
      for those who want to register for SMK Mangcoding can come directly to the Location</marque> </p>
      <input className='staff-input' placeholder='Search Staff..' value={searchText}
            onChange={(e) => setSearchText(e.target.value)}></input>
      <IoSearchOutline className='search-icon' onClick={handleSearch}/>

      
      
  
    

      </div>
      {hospitals.length === 0 && showTopSearches && (
      <div className='teacher-card'>
      
        {features.map((feature) => {
          return (
              <Cardk image={feature.image} name={feature.firstName + " " + feature.lastName} field={feature.dateOfBirth}/>
              
          )
          })}

     
         
      
      </div>
       
       )}
       <div className='teacher-card'>
       {hospitals.map((feature) => (  <Cardk image={feature.image} name={feature.firstName + " " + feature.lastName} field={feature.users.dateOfBirth}/>))}</div>
    </div>
  )
}

export default Staff
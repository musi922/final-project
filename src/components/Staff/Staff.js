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
import '../Homepage/Homepage.css';
import { CiLocationOn } from "react-icons/ci"

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
        setfeatures(response.data.data);
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
      
      <div className='teacher-card'>


        
      
{features?.map((feature) => (
      <Cardk image={feature.image} name={feature.firstName + " " + feature.lastName} field={feature.dateOfBirth}/>))}
   
  


     
         
      
      </div>
       
       
       <div className='teacher-card'>
       {hospitals.map((feature) => (  <Cardk image={feature.image} name={feature.firstName + " " + feature.lastName} field={feature.users.dateOfBirth}/>))}</div>
       <br></br>
       <br></br>
       <div className='footer'>
        
        <div className='footer2'>
          <div className='firstly'>
            <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Social Media</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Instagram</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Facebook</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Twitter</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Linkedin</p1><br></br>
          </div>
          <div className='secondly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Quick Links</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/"} style={{color:"white", textDecoration:"none"}}>Homepage</Link></p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/AboutPage"} style={{color:"white", textDecoration:"none"}}>About Us</Link></p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/Programspage"} style={{color:"white", textDecoration:"none"}}>Programs</Link></p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/Newspage"} style={{color:"white", textDecoration:"none"}}>In the news</Link></p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/Contactpage"} style={{color:"white", textDecoration:"none"}}>Contact us</Link></p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}><Link to={"/Loginpage"} style={{color:"white", textDecoration:"none"}}>Admin</Link></p1>
          </div>
          <div className='thirdly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Address</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Adress: Gasabo-Kimihurura</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Avenue: KGAV23</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Email:Newgeaneration@gmail.com</p1><br></br>
          </div>

          <div className='fourthly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-1%", marginLeft:"1%"}}>Subscribe our NewsLetter</h1>
          <input placeholder='Your full name' className='your' style={{color:"white"}} />
          <input placeholder='Your Email' className='your' style={{color:"white"}} />
          <br></br>

           <button type="submit" className='subo'  style={{cursor:"pointer"}}>Submit</button>
           <br></br>
           <br></br>
           <br></br>
           
          </div>
          <div className='fifth'>
             <button className='view'>
              <a style={{color: "white", textDecoration: "none"}} href="https://www.google.com/maps/place/New+Generation+Academy/@-1.9556697,30.0779318,17z/data=!3m1!4b1!4m6!3m5!1s0x19dca7084cb0c413:0xe7d586d77471397c!8m2!3d-1.9556697!4d30.0801205!16s%2Fg%2F11px959qnm" target={"_blank"}>View map <CiLocationOn style={{color: "white", fontSize: "22px"}}/></a>
               </button> 
          </div>
        </div>
        <div className='footer3'>
          <h1 style={{color:"rgb(154, 153, 153)", fontSize: "16px", marginTop: "2%"}}>Administrative office: KGAV23 Kimihurura</h1>
          <div className='pici'></div>
          <div>
            <h1 style={{color: "#0193DC", marginTop: "2%", marginLeft: "1%"}}>New Generation Academy<br></br><span style={{color:"white"}}>Transformed For Community</span></h1>
            <p1 style={{color:"rgb(154, 153, 153)", fontSize: "16px", marginTop: "2%", marginLeft: "16%", position: "absolute"}}>&copy; {2023} New Generation Academy. All Rights Reserved.created by 0799340499</p1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Staff
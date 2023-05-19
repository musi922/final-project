import React, { useState } from 'react'
import Navigation from '../Navigation/Navigation'
import image from "../../components/Navigation/image.jpg";

import './Programs.css'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { AiOutlineSearch } from "react-icons/ai"
import '../Calender.css'
import Carousel from 'react-bootstrap/Carousel';
import { BsArrowRight } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import "../Homepage/Homepage.css"
import '../InTheNews/InTheNews.css'


const Programspage = () => {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  const photos = [
    'https://www.nga.ac.rw/wp-content/uploads/2021/07/457A1347-scaled-800x400.jpg',
    'https://www.nga.ac.rw/wp-content/uploads/2021/07/457A1559-scaled-800x400.jpg',
    'https://www.nga.ac.rw/wp-content/uploads/2021/07/457A1961-scaled-800x400.jpg'
  ];
  

  return (
    <div>
      <Navigation/>
      <div style={{backgroundColor:"white"}}>
      <div className='main'>
      <div><img src={image} alt="not found" style={{height: "58vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
         
      <h1 className="ttle" style={{width:"50%"}}>School Programs </h1>
        <div className='t-part'>
        <p className='t-head'>  Annoucements </p>
        <p className='t-head_content'>  We make a new Registration!!, 
        for those who want to register for SMK Mangcoding can come directly to the Location </p>

        </div>
      </div>
      <div className='page'>
        <h1>Nursery Program</h1>
        <p1>our nursery program provides great interacting anddevelopmnt skills for 2-4 year old. students are engaged</p1>
        <h2>in activities that help them grew physically,intellectually socially and spiritully.</h2>
        <h3>in activities that help them grew physically,intellectually socially and spiritully. nkcsojsspcslmcmoscosjcjj</h3>
      </div>
      <div className='nus'>
      <input placeholder='Search...' className='inpute'/> <AiOutlineSearch className='searche'/>
      <h1>Nursery activities</h1>
      </div>
      <div className='calendar-container' style={{marginTop: "15%", marginLeft: "60%"}}>
        <Calendar onChange={onChange} value={date} className='calendar'/>
      </div>
      <div className='photos'>
      <Carousel>
    {photos.map((photo, index) => (
      <Carousel.Item key={index}>
        <img className='d-block w-100' src={photo} alt={`Photo ${index + 1}`} />
      </Carousel.Item>
    ))}
  </Carousel>
  <button className='readmore2'>Read more</button>

      </div>
      <div style={{marginTop:"-12%"}}>
        <div className='page'>
          <h1>Primary Program</h1>
          <p1>our Primary program provides great interacting anddevelopmnt skills for 2-4 year old. students are engaged</p1>
          <h2>in activities that help them grew physically,intellectually socially and spiritully.</h2>
          <h3>in activities that help them grew physically,intellectually socially and spiritully. nkcsojsspcslmcmoscosjcjj</h3>
        </div>
        <div className='nus'>
        {/* <input placeholder='Search...' className='inpute'/> <AiOutlineSearch className='searche'/> */}
        <h1>Primary activities</h1>
        </div>
        <div className='calendar-container' style={{marginTop: "15%", marginLeft: "60%"}}>
          <Calendar onChange={onChange} value={date} className='calendar'/>
        </div>
        <div className='photos'>
        <Carousel>
      {photos.map((photo, index) => (
        <Carousel.Item key={index}>
          <img className='d-block w-100' src={photo} alt={`Photo ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>

        </div>
      </div>
      <button className='readmores'>Read more</button>
      <div className='last'>
        <h1>For more information</h1>
        <p1>Contact Us Here<BsArrowRight className='rig'/></p1>
      </div>
      <div className='footer' style={{marginTop:"-5%"}}>
        
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
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Homepage</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>About Us</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Programs</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>In the news</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Contact us</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"9%"}}>Admin</p1>
          </div>
          <div className='thirdly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-3%", marginLeft:"1%"}}>Address</h1>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Adress: Gasabo-Kimihurura</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Avenue: KGAV23</p1><br></br>
          <p1 style={{color: "white", cursor: "pointer", marginLeft:"-2%"}}>Email:Newgeaneration@gmail.com</p1><br></br>
          </div>
          <div className='fourthly'>
          <h1 style={{color: "white",fontSize:"19px", marginTop:"-1%", marginLeft:"1%"}}>Let's Stay Connected</h1>
          <input placeholder='Your Email' className='your' style={{color:"white"}}/>
           <button className='subo'>Submit</button>
           <h1 style={{color: "white", cursor: "pointer", marginLeft:"-2%", marginTop: "2%"}}>Subscribe to our NewsLetter</h1>
           <button className='newsletter'>NewsLetter<BsArrowRight/></button>
           
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
            <p1 style={{color:"rgb(154, 153, 153)", fontSize: "16px", marginTop: "2%", marginLeft: "16%", position: "absolute"}}>&copy; {2023} New Generation Academy. All Rights Reserved.</p1>
          </div>

        </div>
      </div>
      
      
      
      </div>
    </div>
  )
}

export default Programspage

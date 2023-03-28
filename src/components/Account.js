import React from 'react'
import Navigation from '../components/Navigation/Navigation'
import image from "../components/Navigation/image.jpg"
import './Account.css'
import { BsArrowRight } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import { Link } from 'react-router-dom'
import Signup from './Signup'

const Account = () => {
  return (
    <div>
        <Navigation/>
        <div><img src={image} alt="not found" style={{height: "55vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
        <div style={{marginTop:"-15%", position:"absolute", color: "white", marginLeft: "43%"}}>
        <h1 style={{marginLeft: "-15%"}}>Welcome prospective new students</h1>
        <p1 style={{color: "white", fontSize:"22px"}}>New Generaton academy</p1>
        <h2 style={{marginLeft: "-10%"}}>2023-2024 Academic Year </h2>
        
      </div>
      <div>
      <button className='readmored'><Link to={"/Loginpage"} style={{color:"white", textDecoration:"none"}}>Login</Link></button>
      {/* <button className='readmoref'><Link to={"/Signpage"} style={{color:"white", textDecoration:"none"}}>sign up</Link></button> */}
      </div>
      <div>
        <h1 className='information'>Information</h1>
        
      </div>
      <div className='div'>
        <h1 style={{color:"#3A4E50", fontSize: "19px", textAlign:"center", letterSpacing: "0.5px", marginTop:"2%"}}>For information, Registration for the 2021-2022 period for the Affirmation, Transfer of Parent/Guardian,<br></br> and Achievement pathways will be open on 28 June to 2 July 2021, while for the Zoning pathway will be</h1>
        <h2 style={{color:"#3A4E50", fontSize: "19px", textAlign:"center", letterSpacing: "0.5px", marginTop:"2%"}}>open on 5 July – 9 July 2021</h2>
        <h1 style={{color:"#3A4E50", fontSize: "19px", textAlign:"center", letterSpacing: "0.5px", marginTop:"2%"}}>For information, Registration for the 2021-2022 period for the Affirmation, Transfer of Parent/Guardian,<br></br> and Achievement pathways will be open on 28 June to 2 July 2021, while for the Zoning pathway will be</h1>
        <h2 style={{color:"#3A4E50", fontSize: "19px", textAlign:"center", letterSpacing: "0.5px", marginTop:"2%"}}>open on 5 July – 9 July 2021</h2>
      </div>
      <div className='footer' style={{marginTop:"-2%"}}>
        
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
  )
}

export default Account

import React from 'react'
import './About.css'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
import '../Homepage/Homepage.css'
import { BsArrowRight } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"

function AboutPage() {
  return (
    <div>
    <Navigation/>
    <div><img src={image} alt="not found" style={{height: "95vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
    <div className='top'>
    <h1 className="hem" style={{marginLeft:"4%", marginTop:"-15%", color:"white", backgroundColor:"none"}}>Vision and Mission of  New Generation</h1>
    <div className='box-text'>
    <div className='box-mn'>
    <p className='vson'>Vision</p>   
    </div>
    <p className='text-m'>   Forming learners with Christ Centred 
         knowledgeable, ethical, environmentally minded that Developing
          a learning  culture based on love of Knowledge
         Improving school facilities towards clean
    can compete outside as Outstanding Leaders for change needed  on the world stage.</p>
    </div>
       
    <div className='box-text_1'>
    <div className='box-mn_1'>
    <p className='mson'>Mision</p> 
    </div>
    <p className='text-m_1'>   Forming learners with Christ Centred 
         knowledgeable, ethical, environmentally minded that 
         Realizing Education  By Example
         Developing a learning  culture based on love of Knowledge
         Improving school facilities towards clean, healthy and environmentally friendly schools</p>
    </div>
    </div>
    
     
    </div>

    <div className='goal-text'>
    <div className='goal-bar'>
    <p className='goal-t'> School Goals In 2023 as It is Expected:</p>
    </div>

    <p className='text-gl'>   Forming learners with Christ Centred 
    knowledgeable, ethical, environmentally minded that 
    Realizing Education  By Example
    Developing a learning  culture based on love of Knowledge
    Improving school facilities towards clean, healthy and environmentally friendly schools
    1.100% All Teachers/Staff provide services, exemplary to service users with a religious, ethical,
      and cultural approach
100% of students carry out religious, ethical and cultural laws both at school and outside
90% of school facilities close to National Education Standards (NES)
80% of students excel at regional, national and global levels
    </p>
    </div>
    <div className='strategy'>
    <div className='strategy-t'>
    <p className='stategy-text'> Strategy</p>
      </div>

      <p className='strategy-content'>   Forming learners with Christ Centred 
    knowledgeable, ethical, environmentally minded that 
    Realizing Education  By Example
    Developing a learning  culture based on love of Knowledge
    Improving school facilities towards clean, healthy and environmentally friendly schools
    1.100% All Teachers/Staff provide services, exemplary to service users with a religious, ethical,
      and cultural approach
100% of students carry out religious, ethical and cultural laws both at school and outside
90% of school facilities close to National Education Standards (NES)
80% of students excel at regional, national and global levels
    </p>
    </div>
    <div className='footer' style={{marginTop:"42%"}}>
        
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

export default AboutPage

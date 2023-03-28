import React from 'react'
import Navigation from '../Navigation/Navigation'
import './Homepage.css';
import image from "../Navigation/image.jpg"
import Homecards from '../Homecards/Homecards';
import Homecards2 from '../Homecards/Homecards2';
import unsplash from "../Navigation/unsplash.jpg"
import unsplash2 from "../Navigation/unsplash2.jpg"
import ellip from "../Navigation/ellip.jpg";
import group from "../Navigation/group.jpg";
import norrs from "../Navigation/norrs.jpg"
import { IoIosArrowBack } from "react-icons/io"
import { FcNext } from "react-icons/fc"
import Carousel from 'react-elastic-carousel';
import { v4 as uuidv4 } from 'uuid';
import { AiOutlineSearch } from "react-icons/ai"
import { BsArrowRight } from "react-icons/bs"
import { SiGoogleclassroom } from "react-icons/si"
import { GiVintageRobot } from "react-icons/gi"
import { SiKhanacademy } from "react-icons/si"
import Projectcard from '../Projectcard/Projectcard';
import { useState } from 'react';
import { MdDoubleArrow} from "react-icons/md"
import { MdOutlineKeyboardDoubleArrowLeft} from "react-icons/md"
import Reasons from '../Projectcard/Reasonscards/Reasons';
import { CiLocationOn } from "react-icons/ci"
import { Link } from 'react-router-dom';


const Homepage = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const Homecard = [
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/CfOGonN9h6c",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    

  ];
  const Homecard2 = [
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/Zaa1d3Vn0Zo",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },
    {
      id: uuidv4(),
      video: "https://www.youtube.com/embed/ncvtUuUfqP8",
      description: "Robot Project",

    },

    

  ];
  return (
    <div>
      {/* landing Page */}
      <Navigation/>
      {/* Homepage first screen */}
      <div className="section1">
        <div className='carousel-container' id='carousel-1-container'>
        {/* <h1 style={{position: "absolute", color: "white", marginLeft:"42%", marginTop: "-60%", fontSize: "26px"}}>Welcome to New Generation Academy</h1> */}
          <h1 style={{position: "absolute", color: "rgb(169, 165, 165)", marginLeft:"-55%", marginTop: "-57%", fontSize: "20px"}}>Student Project</h1>
          
        <Carousel itemsToShow={1}>
        {
                Homecard.map(item =>(
                  <div key={item.id}>
                    <iframe width="560" height="315" src={item.video} title={item.description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <p>{item.description}</p>
                  </div>
                ))
              }
        </Carousel>
        </div>
         <div className='carousel-container2'>
         <h1 style={{position: "absolute", color: "rgb(169, 165, 165)", marginLeft:"-55%", marginTop: "-57%", fontSize: "20px"}}>Group Project</h1>
          
         <Carousel itemsToShow={1}>
              {
                Homecard2.map(item =>(
                  <div key={item.id}>
                    <iframe width="560" height="315" src={item.video} title={item.description} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                    <p>{item.description}</p>
                  </div>
                ))
              }
          </Carousel>

        
        </div> 
      </div>
      <div >
        <button className='readmore'><Link to="/ProgramsPage" style={{color:"white", textDecoration:"none"}}>Read more</Link></button>
        <button className='tittle'>Welcome To New Generation Academy</button>
      </div>
      {/* about us summary page */}
     <div className='About'>
      <img src={norrs} alt="not " style={{height: "84vh",marginTop: "3%",width: "60%", backGroundPosition: "center", backGroundSize: "cover", marginLeft: "40%", opacity: "0.8"}}/>
      <div className='rics'>
          <h1>What We Do at NGA</h1>
          <p1>New generation Academy is an Excellence<br></br>
    School aime at Teaching students to reach<br></br> 
    on ahigh and Competent Level</p1>
      <button className="readmore1">Read more</button>
      </div>    
      <div className='container'>
        
        <div className='visions'>
          <img src={ellip} style={{marginLeft: "35%", marginTop: "11%"}}/>
          <h1>Who We Are</h1>
          <section style={{padding: "6px"}}>
            <p1>Lorem ipsum dolor sit amet adipcing
            aqua lorem ipsum.</p1>

          </section>
        </div>
        <div className='missions'>

          <img src={group} style={{marginLeft: "35%", marginTop: "11%", border: "none"}}/>
          <h1>Mission</h1>
          <section style={{padding: "6px"}}>
            <p1>Lorem ipsum dolor sit amet adipcing<br></br>
          aqua lorem ipsum.</p1>

          </section>
        </div>
        <div className='values'>
          <img src={group} style={{marginLeft: "35%", marginTop: "11%", border: "none"}}/>
          <h1>Values</h1>
          <section style={{padding: "6px"}}>
            <p1>Lorem ipsum dolor sit amet adipcing<br></br>
            aqua lorem ipsum.</p1>
          </section>
        </div>
        <div className='what'>
          <img src={ellip} style={{marginLeft: "35%", marginTop: "11%"}}/>
          <h1>Vision</h1>
          <section style={{padding: "6px"}}>
            <p1>Lorem ipsum dolor sit amet adipcing<br></br>
          aqua lorem ipsum.</p1>
        </section>
        </div> 
      </div>
    </div>
    {/* progrms summary page */}
    <div className='programs'>
      <h1>The School programs</h1>
      <input placeholder='Search' className='input'/> <AiOutlineSearch className='search'/>
      <div className='side'>
      <div className='coding'></div>
      <div className='text'>
        <h1>Coding & Robotics Program</h1>
        <p1>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci<br></br>
aqua lorem ipsum folor suit met voul adnoi<br></br>bury adpci diul lorem.</p1>
<h2>20-may-2023</h2>
<BsArrowRight className='right'/>
      </div>
      <div className='nursery'></div>
      <div className='texts'>
        <h1>Nursery Program</h1>
        <p1>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci<br></br>
aqua lorem ipsum folor suit met voul adnoi<br></br>bury adpci diul lorem.</p1>
<h2>20-may-2023</h2>
<BsArrowRight className='rights'/>
      </div>
      <div className='primary'></div>
      <div className='textss'>
        <h1>Primary Program</h1>
        <p1>Lorem ipsum dolor sit amet adipcing amet adipcingamet adipci<br></br>
aqua lorem ipsum folor suit met voul adnoi<br></br>bury adpci diul lorem.</p1>
<h2>20-may-2023</h2>
<BsArrowRight className='rightss'/>
      </div>

    </div>
    <div className='next'>
      <h1>Enroll Date:</h1>
      <div className='pics'></div>
      <h2>03-may-2023</h2>
      <p1>Nursery Program</p1>
      <BsArrowRight className='righ'/><br></br><br></br>
      <div className='pics'></div>
      <h2>06-may-2023</h2>
      <p1>Primary Program</p1>
      <BsArrowRight className='righ'/>
    </div>

    </div>
    {/* Student Projects */}
    <div>
      <h1 className='hea'>The Student Projects&nbsp;</h1>
    </div>
    <div className='box'>
      <div className='box1'>
        <SiGoogleclassroom className="room"/>
        <h1>Nursery Projects</h1>
        <p1>We teach our students the way to make the best<br></br></p1>
        <h2>things required world wide</h2>
      </div>
      <div className='box2'>
      <GiVintageRobot className="room"/>
        <h1>Robotics Project</h1>
        <p1>We teach our students the way to make the best<br></br></p1>
        <h2>things required world wide</h2>
      </div>
      <div className='box3'>
      <SiKhanacademy className="room"/>
        <h1>Primary Project</h1>
        <p1>We teach our students the way to make the best<br></br></p1>
        <h2>things required world wide</h2>
      </div>
    </div>
    
    <div className='projects'>
      <div className='cardone' id='0'>
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" 
      studentname="Manzi fred" studentno="12" class="p3" date="01-01-2023"/>
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" studentname="Manzi fred" />
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" studentname="Manzi fred" />
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" studentname="Manzi fred" />
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" studentname="Manzi fred" />
      <Projectcard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO9IzO2nC-9dmOVxSR5xfKT8JZ_L0oVgYA3A&usqp=CAU" head="Robots Project" studentname="Manzi fred"/>
      </div >
       <div className='no'>
       <div className='nexte'>
        <MdOutlineKeyboardDoubleArrowLeft/>
      </div>
       <div className='numbers'>
        <h1>1</h1>
      </div>
       <div className='number2'>
        <h1>2</h1>
      </div>
      <div className='number3'>
        <h1>3</h1>
      </div>
      <div className='nex'>
        <MdDoubleArrow/>
      </div>
      
      </div>
    </div>
    {/* reasons to join us */}
      <div className='reasonis'>
        <h1 style={{color:"#3A4E50", marginLeft: "34%", marginTop:"3%"}}>The Reason to join New Generation Academy</h1>
        <div className='car'>
        <Reasons head="International Accredited" description="it is a non profit public-benefit corporation that help organisationsdemonstrate compliance andcompetense to their public"
        img="https://www.nga.ac.rw/wp-content/uploads/2021/03/cambrige.jpg"/>
        <Reasons head="Christian Life" description="it is a non profit public-benefit corporation that help organisations demonstrate compliance anda competense to their public"
        img="https://www.nga.ac.rw/wp-content/uploads/2021/06/457A1300-scaled.jpg"/>
        <Reasons head="Student life" description="it is a non profit public-benefit corporation that help organisations demonstrate compliance anda competense to their public"
        img="https://www.nga.ac.rw/wp-content/uploads/2021/07/457A2067-scaled-800x400.jpg"/>
        <Reasons head="School facilities" description="it is a non profit public-benefit corporation that help organisations demonstrate compliance anda competense to their public"
        img="https://www.nga.ac.rw/wp-content/uploads/2021/07/457A2267-scaled-800x400.jpg"/>
      </div>
      </div>
      <div className='register'>
        <div className='opacity'></div>
        <h1 >Register Your Child Here</h1>
        <button className='read'><Link to="/Registerpage" style={{color:"white", textDecoration:"none"}}>Register</Link></button>
      </div>
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

export default Homepage

import React from 'react'
import './InTheNews.css'
import Navigation from '../Navigation/Navigation';
import image from "../Navigation/image.jpg"
import Newscard from '../newsCards/Newscard';
import Starter from '../../views/Starter'
import '../Homepage/Homepage.css';
import { CiLocationOn } from "react-icons/ci"
import { BsArrowRight } from "react-icons/bs"

const InTheNews = () => {
  return (
    <div>
      <Navigation/>
      <div >
      <img src={image} alt="not found" style={{height: "58vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
    <h1 className="ttle">In The News </h1>
        <div className='t-part'>
        <p className='t-head'>  Annoucements </p>
        <p className='t-head_content'>  We make a new Registration!!, 
        for those who want to register for SMK Mangcoding can come directly to the Location </p>

        </div>
      </div>
     <p className='tp-news'>Top News </p>

     <div className='news-box'>
       <Newscard/>
       
     </div>
     <div className='news-box_1'>
     <Newscard/>
       
     </div>

     <div className='news-box_2'>
     <Newscard/>
     </div>  
     <div className='new-pc'>
     </div>
     <p className='new-big_title'>Teaching And Learning Activities 
     </p>
     <p className='new-big_decr'>Lorem ipsum dolor sit amet, consectetur 
     adipiscing 
      mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh. 
      For information, Registration for the 2021-2022 period for the Affirmation, Transfer of Parent/Guardian, 
      and Achievement pathways will be open on 28 June to 2 July 2021, while for the Zoning pathway will be 
     </p>
     <button className='news-button'>Read More</button>

     <div className='news-box_3'>
     <Newscard/>
     </div>
     <div className='news-box_4'>
     <Newscard/>
     </div>
     <div className='news-box_5'>
     <Newscard/>
     </div>
     <div className='news-box_6'>
     <Newscard/>
     </div>
   
     <div className='news-box_7'>
     <Newscard/>
     </div>
     <div className='news-box_8'>
     <Newscard/>
     </div>
     
      

     <p className='recent-post'>Recent Post</p>
     <button className='buttton-news'> Study At Home</button>
     <button className='buttton-news_1'> Studying a Day Outside in a Class of NGA</button>
     <button className='buttton-news_2'> Teaching learning activities at home</button>
     <button className='buttton-news_3'> Teaching and Learning Activities at Home 2020</button>
     <div className='news-box_55'>
    
     </div>
     <div style={{marginTop: "127%"}}>
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

export default InTheNews

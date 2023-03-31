import React from 'react'
import "./Projectcard.css"
import { Link } from 'react-router-dom'

const Projectcard = (project) => {
  return (
    <div>
        <div className='proje'>
            {/* <video src={project.img} style={{height: "25vh", width: "46vh", border: "1px solid transparent", borderRadius: "7px"}} controls/> */}
            <iframe width="360" height="192" src={project.img} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <h1 style={{color: "white", fontSize: "20px", marginTop: "-9%", marginLeft: "2%"}}>{project.head}</h1>
            <div className='inputs'>
                <p1>
                    Student name : <br></br><br></br>
                    Student No   : <br></br><br></br>
                    class        : <br></br><br></br>
                    date         :
                </p1>
                <button className='bat' style={{color:"white", textDecoration:"none", cursor:"pointer"}}><Link to={"/Projectpage"} style={{color:"white", textDecoration:"none", cursor:"pointer"}}>Find More</Link></button>
            </div>
             <h2 style={{color: "black", fontSize: "18px", marginTop: "-10.5%", marginLeft: "10%",fontfamily: "Open Sans",
            fontStyle: "normal", position: "absolute",
            fontweight: 700}}>{project.studentname}</h2> 
             <h2 style={{color: "black", fontSize: "18px", marginTop: "-7.8%", marginLeft: "10%",fontfamily: "Open Sans",
            fontStyle: "normal", position: "absolute",
            fontweight: 700}}>{project.studentno}</h2> 
             <h2 style={{color: "black", fontSize: "18px", marginTop: "-5%", marginLeft: "10%",fontfamily: "Open Sans",
            fontStyle: "normal", position: "absolute",
            fontweight: 700}}>{project.class}</h2> 
             <h2 style={{color: "black", fontSize: "18px", marginTop: "-1.5%", marginLeft: "7%",fontfamily: "Open Sans",
            fontStyle: "normal", position: "absolute",
            fontweight: 700}}>{project.date}</h2> 
             <div className='foot'></div>


        </div>
    </div>
  )
}

export default Projectcard

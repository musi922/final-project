import React from 'react'
import "./Reasons.css"


const Reasons = (reasons) => {
  return (
    <div className='reasons'>
    <img src={reasons.img} style={{height: "25vh", width: "34.8vh", border: "1px solid transparent", borderRadius: "7px", backgroundColor:"none"}}/>
    <h1 style={{color: "black", fontSize: "18px", marginTop: "9%", marginLeft: "14%"}}>{reasons.head}</h1>
    <p1 style={{color: "#475356", fontSize: "18px",marginLeft:"3%", marginTop: "2%"}}>{reasons.description}</p1>
    </div>
  )
}

export default Reasons

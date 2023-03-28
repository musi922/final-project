import React from 'react'
import './Homecards.css'

const Homecards2 = (props) => {
  return (
    <div className='homecard'>
      <div className='ho'>
        <div className='card1'>
          <iframe src={props.video} style={{width: "34vh", gap: "5px", height: "36vh", border: "1px solid transparent", borderRadius: "8px", backgroundColor:"black", opacity: "0.4px"}} allowfullscreen></iframe>
        </div>
        <div className='head'>
          <h1 style={{color: "white", fontSize: "14px", position: "absolute", marginTop: "30%", marginLeft: "-5%"}}>{props.description}</h1>
        </div>
      </div>
    </div>
  )
}

export default Homecards2

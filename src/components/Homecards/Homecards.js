import React from 'react'
import './Homecards.css'

const Homecards = (props) => {
  return (
    <div className='homecard'>
      <div className='ho'>
        <div className='card1'>
        <img src={props.img} style={{width: "34vh",gap: "5px", height: "36vh", border: "1px solid transparent", borderRadius: "8px"}}
      />
        </div>
        <div className='head'>
        <h1 style={{color: "white", fontSize: "14px",  position: "absolute", marginTop: "30%", marginLeft: "-5%"}}>{props.description}</h1>
        </div>
      </div>
    </div>
  )
}

export default Homecards


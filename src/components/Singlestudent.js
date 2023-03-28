import React from 'react'
import Navigation from './Navigation/Navigation'
import { BsArrowRight } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import image from "../components/Navigation/image.jpg"

const Singlestudent = () => {
  return (
    <div>
      <Navigation/>
      <div><img src={image} alt="not found" style={{height: "55vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
    </div>
  )
}

export default Singlestudent

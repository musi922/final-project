import React from 'react'
import './staffCard.css'

import { Link } from 'react-router-dom';
const StaffCard = (props) => {
  return (
    <div >
    <img src={props.imeg} alt='TeacherPhoto' className='photo_teacher'></img>
      <p className='teacher-name1' > <Link to={"/TeacherPage"}> {props.p} </Link>  </p>
      <p1 className='teacher-position'> {props.p1}</p1>
      

    </div>
  )
}

export default StaffCard

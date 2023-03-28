import React from 'react'
import './TeacherPage.css'
import '../../views/ui/Cards'
import Navigation from '../Navigation/Navigation'
import image from "../Navigation/image.jpg"
 import {BsArrowRight} from 'react-icons/bs'
 import {GoLocation} from 'react-icons/go'
 import {BsFillPersonFill} from 'react-icons/bs'
 import {FiAtSign} from 'react-icons/fi'


const TeacherPage = () => {
  return (

    <div>
    
      <Navigation/>
      <div><img src={image} alt="not found" className='pc' style={{height: "67vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/>
      <p className='teacher-hello'>Hello, l'm</p>
      <p className='teacher-name'>Teachers Name</p>
      <p className='teacher-descr'>NGA Teacher</p>
      <button className='teacher-button'>Contact me  <BsArrowRight/></button>
    
     {/*<div className='teacher-photo'></div>*/} 

      </div>
      <p className='about-me'>About Me</p>
      <div className='lne'></div>
      <div className='teacher-photo1'></div>
       
      <p className='who-am'>Who I Am?</p>
      <p className='who-dtals'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
       Sed at tellus semper lacus varius suscipit. Suspendisse pulvinar, 
       justo id scelerisque efficitur, quam augue pharetra metus, ultricies finibus elit ipsum vitae.

      Cupiditate recusandae laudantium esse, harum animi 
       quisquam et delectus ipsum quam alias quaerat? Quasi hic quidem illum </p>

       <p className='my-sll'>My Skills</p>
       <div className='lne-1'></div>
       <p className='teacher-skill_t'>My Teaching  <span style={{color:'#2BA7E2',margin:5}}>skills </span>   and Abilities</p>
       <p className='maths'>Mathematics </p>
       <div className='bar'>
       <div className='bar-line'></div>
       </div>
       <p className='Skill-decr'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dignissimos, ratione error est recusandae consequatur, iusto illum 
        deleniti quidem impedit, quos quaerat quis minima sequi. Cupiditate 
        recusandae laudantium esse, harum animi aspernatur quisquam et delectus
        ipsum quam alias quaerat? Quasi hic quidem illum. Ad delectus natus
         aut hic explicabo minus quod. </p>
          
         <p className='Archievements'>Archievements</p>
         <div className='Archievements-ln'></div>
         <div className='Archievements-photo_1'></div>
         <div className='Archievements-photo_2'></div>
         <div className='Archievements-photo_3'></div>
         <div className='Archievements-photo_4'></div>
         <div className='Archievements-photo_5'></div>
         <div className='Archievements-photo_6'></div>
         <p className='contact-me'>Contact Me</p>
         <div className='contact-line'></div>
         <p className='massage-title'>Message Me</p>
         <p className='get-in-touch'>Get in Touch</p>
         <p className='get-in-touch_description'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos harum corporis fuga corrupti. Doloribus quis soluta nesciunt veritatis vitae nobis?</p>
          <BsFillPersonFill className='person-icon'/>
          <p className='teacher-nam'>Teachers Name</p>
          <GoLocation className='location-icon'/>
          <p className='location'>Location</p>
          <FiAtSign className='atsign-icon'/>
          <p className='email-teacher'>richardmusime1@gmail.com</p>
         <input className='input-name' placeholder='Name'></input>
         <input className='input-email' placeholder='Email'></input>
         <input className='input-subject' placeholder='Subject'></input>
         <textarea className='input-message' placeholder='Message'></textarea>
         <button className='contact-button'> Send</button>
         
      </div>
  )
}

export default TeacherPage

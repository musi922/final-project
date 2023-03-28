import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import './Register.css'
import image from "../components/Navigation/image.jpg"

function Register() {
  const [program, setProgram] = useState('');
  const [studentname, setStudentname] =useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phonenumber, setPhonenumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server or API
  }

  return (
    <div>
        <Navigation/>
        <div><img src={image} alt="not found" style={{height: "105vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
        <div style={{ position:"absolute", marginTop:"-47%", marginLeft:"22%"}}>
      <h1 className='hii'>Register your child here</h1>
      <div className='main'>
      <div className='sub'>
      <form onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name</label>
        <input 
          type="text" 
          id="firstName" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          required 
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
          type="text" 
          id="lastName" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          required 
        />

        <label htmlFor="phonenumber">Phone Number</label>
        <input 
          type="phonenumber" 
          id="phonenumber" 
          value={phonenumber} 
          onChange={(e) => setPhonenumber(e.target.value)} 
          required 
        />

        <label htmlFor="program">Program</label>
                <input 
                type="program" 
                id="program" 
                value={program} 
                onChange={(e) => setProgram(e.target.value)} 
                required 
                />
        <label htmlFor="studentname">student Name</label>
                <input 
                type="studentname" 
                id="studentname" 
                value={studentname} 
                onChange={(e) => setStudentname(e.target.value)} 
                required 
                />

        <button type="submit">Register</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Register;

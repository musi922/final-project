import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import './Signup.css'
import image from "../components/Navigation/image.jpg"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [Level, setLevel] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [Studentid, setStudentid] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit form data to server or API
  
  axios
  .post("https://new-generation-wgs8.onrender.com/Student/Signup",{
    Firstname: firstName,
    lastname: lastName,
    schoolId: Studentid,
    Level: Level,
    email: email,
    password: password,
  })
  .then((response) => {
    console.log(response.data);
    navigate("/Loginpage");
})
.catch((error) => {
    console.error(error);
})

}
  return (
    <div>
        <Navigation/>
        <div><img src={image} alt="not found" style={{height: "105vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
        <div style={{ position:"absolute", marginTop:"-47%", marginLeft:"22%"}}>
      <h1 className='hii'>Create an NGA Account</h1>
      <div className='main'>
      <div className='sub'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

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

        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />

        <label htmlFor="level">Level</label>
                <input 
                type="text" 
                id="level" 
                value={Level} 
                onChange={(e) => setLevel(e.target.value)} 
                required 
                />
        <label htmlFor="studentid">Student Id</label>
                <input 
                type="text" 
                id="studentid" 
                value={Studentid} 
                onChange={(e) => setStudentid(e.target.value)} 
                required 
                />
                
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      </div>
      </div>
      </div>
    </div>
  );
}

export default Signup;

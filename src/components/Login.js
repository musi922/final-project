import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import './Login.css'
import image from "../components/Navigation/image.jpg";
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post('https://new-generation.onrender.com/auth/login', { email, password })
      .then(response => {
        // handle successful login here
        navigate("/dashboard/starter");
      })
      .catch(error => {
        setError("please type valid creditentials");
      });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div>
      <Navigation/>
      <div><img src={image} alt="not found" style={{height: "105vh",top:"112px", width: "100%", backGroundPosition: "center", backGroundSize: "cover"}}/></div>
      <div style={{ position:"absolute", marginTop:"-47%", marginLeft:"22%"}}>
        <h1 className='hii'>Login at NGA Account</h1>
        <div className='main'>
          <div className='sub'>
            <label style={{position:"absolute", marginLeft:"24%", marginTop:"4%", fontSize:"24px"}}>Login now</label>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <input style={{marginLeft:"-12%"}}
                type="email"
                placeholder='type email' 
                id="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />

              <label htmlFor="company">Password</label>
              <div style={{display:"flex"}}>
                <input
                  placeholder='type password' 
                  type={showPassword ? "text" : "password"}
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  required 
                />
                <span onClick={handleShowPassword} style={{cursor:"pointer", margin:"11px 0 0 23px", height:"25px", width:"25px", fontSize:"20px"}}>{showPassword ? "🙈" : "👁️"}</span>
              </div>

              <div className='checkbox'>
                <input 
                  type="checkbox" 
                  id="terms" 
                  required 
                />
                <label htmlFor="terms">I accept the terms and conditions</label>
              </div>

        
              {error && <div className="error" style={{ color: "red" }}>{error}</div>}
              <button type="submit" onClick={handleSubmit}>Log In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

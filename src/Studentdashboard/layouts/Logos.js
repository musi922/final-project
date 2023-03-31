import img from "./img.jpg"
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" style={{textDecoration:"none", color:"black",}}>
      <img src={img} alt="notfound" style={{ height: '4vh', marginLeft: '3px', marginTop:"4%"}} />
            <h1 style={{marginLeft:"20%", width:"100%", marginTop:"-18%", fontSize:"14px"}}>New Generation Academy<span style={{ color: 'black' }}>
              <br />
              Transformed For Community
              </span>
              </h1>
    </Link>
  );
};

export default Logo;

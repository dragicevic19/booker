import { Navigate, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";

const NavbarHome = () => {
  const { user,dispatch} = useContext(AuthContext);

  console.log(useContext(AuthContext));

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
  }




  return (
    <div className="navbar">

      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booker</span>
        </Link>
        {user ?  (
          <div>
          {user.email}
          <Button className="navButton"onClick={handleClick} component ={Link} to ="/">Logout</Button>
          </div>
        ) 
        : (
          <div className="navItems">
            <Button className="navButton" onClick={()=>navigate('/host-register')}>Become a Host</button>
            <Button className="navButton">Register</Button>
            <Button className="navButton" component ={Link} to ="/login">Login</Button>
          </div>
        )}
      </div>
 
    </div>
  );
};

export default NavbarHome;
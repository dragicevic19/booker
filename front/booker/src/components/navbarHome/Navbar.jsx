import { useNavigate } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react";
import {AuthContext} from "../context/AuthContext";
import { Link } from 'react-router-dom';
import { Button } from "@mui/material";


const NavbarHome = () => {
  const { user,dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const usersWithDashboard = [
    "ROLE_COTTAGE_OWNER",
    "ROLE_BOAT_OWNER",
    "ROLE_INSTRUCTOR",
    "ROLE_ADMIN",
    "ROLE_SUPER_ADMIN"
  ]

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGOUT" });
    navigate('/login');
  }

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booker</span>
        </Link>
        {user ?  (
          <div>
            {usersWithDashboard.indexOf(user.type) > -1 && <button onClick={()=>navigate('/dashboard')} className="navButton">Dashboard</button>}

            {user.type === "ROLE_CLIENT" && <button onClick={()=>navigate('/client-profile')} className="navButton">
              Profile</button>}
          {/* {user.email} */}
          <button className="navButton"onClick={handleClick}>Logout</button>
          </div>
        ) 
        : (
          <div className="navItems">
            <button className="navButton" onClick={()=>navigate('/host-register')}>Become a Host</button>
            <button className="navButton">Register</button>
            <button className="navButton" onClick={()=>navigate('/login')}>Login</button>
          </div>
        )}
      </div>
 
    </div>
  );
};

export default NavbarHome;
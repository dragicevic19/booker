import { Link } from "react-router-dom";
import * as React from 'react';
import SideNavbar from "./navbar/SideNavbar";

const Navbar = ({loggedInUser}) => {
    return (
        <nav className="navbar">
            {loggedInUser && <SideNavbar user={loggedInUser} />}
            <h1>The Booker</h1>
            <div className="links">
                <Link to={"/"}>Home</Link>
                <Link to={"/something"}>Something</Link>
                { loggedInUser ? <Link to={"/logout"}>Logout</Link> : <Link to={"/login"}>Login</Link> }
            </div>
        </nav>
    );
}

export default Navbar;
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Booker</h1>
            <div className="links">
                <Link to={"/"}>Home</Link>
                <Link to={"/something"}>Something</Link>
                <Link to={"/login"}>Login</Link>
                <Link to={"/addfishinglesson"}>Add a fishing lesson</Link>
            </div>
        </nav>
    );
}

export default Navbar;
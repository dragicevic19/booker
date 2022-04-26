import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { color } from "@mui/system";
import { red } from "@mui/material/colors";
const Navbar = ({loggedInUser}) => {
    return (
    //     <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
    //     <Toolbar>
    //       <Typography variant="h6" noWrap component="div">
    //         Clipped drawer
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
        <nav className="navbar">
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
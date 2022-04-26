import { useLocation, useNavigate } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { mainNavbarItems } from "./consts/sideNavbarListItems";
import { IconButton, Toolbar } from "@mui/material";

const SideNavbar = ({user}) => {

    const [open, setOpen] = React.useState(false)
    const {pathname} = useLocation()
    const navigate = useNavigate()

    const toggleDrawer = (open) => () => {
        setOpen(open)
    };

  return (
    <div>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon onClick={ toggleDrawer(true)}/>

        </IconButton>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            <div
                className='list'
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                {/* <Toolbar /> */}
                <List>
                    {mainNavbarItems[user.type].map((item, index) => (
                    <ListItem selected={pathname === item.route} button key={item.id} onClick={()=>navigate(item.route)} >
                        <ListItemIcon>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.label} />
                    </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    </div>       
  )
}

export default SideNavbar


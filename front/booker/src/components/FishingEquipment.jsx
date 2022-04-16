import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import PhishingIcon from '@mui/icons-material/Phishing';
import { Checkbox } from '@mui/material';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <PhishingIcon />
        </ListItemIcon>
        <ListItemText primary="Included fishing equipment" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItemButton>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText primary="Fishing stick" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText primary="Worms" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText primary="Catfish net" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText primary="Fish food" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Checkbox/>
          </ListItemIcon>
          <ListItemText primary="Parasol" />
        </ListItemButton>

      </Collapse>
    </List>
  );
}
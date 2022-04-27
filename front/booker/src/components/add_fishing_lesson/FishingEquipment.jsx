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

  const checkboxes = [
    {
        name: 'fishing-stick',
        checked: false,
        label: 'Fishing stick',
    },
    {
        name: 'worms',
        checked: false,
        label: 'Worms',
    },
    {
        name: 'catfish-net',
        checked: false,
        label: 'Catfish net',
    },
    {
        name: 'fish-food',
        checked: false,
        label: 'Fish food',
    },
    {
        name: 'parasol',
        checked: false,
        label: 'Parasol',
    }
];

  const [open, setOpen] = React.useState(false);
  
  const handleClick = () => {
    setOpen(!open);
  };

  const [checkedItems, setCheckedItems] = React.useState({}); //plain object as state

  const handleChange = (event) => {
    setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
    // mutate the current Map
    checkedItems.set(event.target.name, event.target.checked)
    // update the state by creating a new Map
  }

    React.useEffect(() => {
      console.log("checkedItems: ", checkedItems);
    }, [checkedItems]);  
  


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
        
        {
          checkboxes.map(item => (
            <ListItemButton>
            <ListItemIcon>
            <Checkbox name={item.name} checked={checkedItems[item.name]} onChange={handleChange}/>
            </ListItemIcon>
            <ListItemText primary={item.label} />
            </ListItemButton>))
        }

      </Collapse>
    </List>
  );
}
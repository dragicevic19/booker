import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState, useContext } from 'react';
import { TextareaAutosize } from '@mui/material';
import { AuthContext } from '../../../components/context/AuthContext';
import { useNotification } from '../../../components/notification/NotificationProvider';

export default function ChangeProfitPercentage() {

  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="cellAction">
        <div className="changeIncomePercentageButton" onClick={handleClickOpen}>
                  Change Income Percentage
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{height:'400px', width:'400px'}}>
          <TextareaAutosize
            style={{height:'70%', width:'100%'}}
            autoFocus
            minRows={5}
            margin="dense"
            id="name"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button style={{color: 'black'}} onClick={handleClose}>Cancel</Button>
          <Button style={{color: 'green'}} onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="text" color='primary' onClick={handleClickOpen}>
        Additional services
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add an additional service</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add new additional service that will be included into this fishing lesson!
          </DialogContentText>
          <TextField
            required
            fullWidth
            placeholder="Cancellation fee"
            margin="dense"
            id="name"
            label="Name"
            type="email"
            variant="outlined"
          />

        <TextField
            required
            fullWidth
            margin="dense"
            id="price"
            label="Price"
            variant="outlined"
          />  

        <TextField
            required
            fullWidth
            margin="dense"
            id="description"
            label="Description"
            type="email"
            variant="outlined"
          />   

        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>Cancel</Button>
          <Button color='primary' onClick={handleClose}>Add service</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
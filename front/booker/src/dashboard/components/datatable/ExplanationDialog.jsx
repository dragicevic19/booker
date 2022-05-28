import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { TextareaAutosize } from '@mui/material';

export default function FormDialog({userId, handleAccept, handleReject}) {

  const [explanation, setExplanation] = useState('');

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onChange = (e) => {
    setExplanation(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/auth/send-email/async?userId=${userId}&accepted=false&explanation=${explanation}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userId)
      })
        .then(res => {
          if (!res.ok){
            if (res.status == 409){
              console.log('email exists error');
            }
            throw Error('could not fetch data')
          } 
          return res.json()
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err.message)
        })
    setOpen(false);
    handleReject(userId);
  }

  const handleSubmitAccept = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/auth/send-email/async?userId=${userId}&accepted=true`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(userId)
      })
        .then(res => {
          if (!res.ok){
            if (res.status == 409){
              console.log('email exists error');
            }
            throw Error('could not fetch data')
          } 
          return res.json()
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err.message)
        })
    handleAccept(userId);
  }

  return (
    <div>
      <div className="cellAction">
        <div className="acceptButton" onClick={handleSubmitAccept}>
                  Accept
        </div>
        <div className="rejectButton" onClick={() => handleClickOpen(userId)}>
                  Reject
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Explanation of rejection</DialogTitle>
        <DialogContent>
          <TextareaAutosize
            autoFocus
            minRows={5}
            margin="dense"
            id="name"
            label="Text"
            type="text"
            fullWidth
            variant="standard"
            value={explanation}
            onChange={onChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState, useContext } from 'react';
import { TextareaAutosize } from '@mui/material';
import { AuthContext } from '../components/context/AuthContext';

export default function DeleteUserDialog({userId, handleDelete, sendNotification}) {

  const { user } = useContext(AuthContext);

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
    const data = {
      id: userId,
      explanation: explanation
    }

    fetch(`http://localhost:8080/api/create-deletion-request${user.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(data)
      })
        .then(res => {
          if (!res.ok){
            if (res.status == 409){
              console.log('email exists error'); // ?
            }
            throw Error('could not fetch data')
          } 
          return res.json()
        })
        .then(data => {
            sendNotification("success", "You successfully sent a request for deletion. Please wait for administrator to approve your request!");
        })
        .catch(err => {
            sendNotification("error");
        })
    setOpen(false);
    handleDelete(userId);
  }

  return (
    <div>
      <div className="cellAction">
      <div className="deleteButton" onClick={() => handleClickOpen(userId)}>
                  Delete Account
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Explanation of deletion</DialogTitle>
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
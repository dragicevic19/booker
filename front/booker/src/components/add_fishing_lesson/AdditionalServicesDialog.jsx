import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CurrencyInput from "react-currency-input-field"
import { useState } from 'react'

export default function FormDialog({onAddAdditionalService}) {
  const [open, setOpen] = useState(false);


  //atributi dodatne usluge
  const [name, setName] = useState('')  
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {

    if(!name){
      alert('Please enter the name')
      return
    }

    if(!description){
      alert('Please enter the description')
      return
    }

    if(!price){
      alert('Please enter the price')
      return
    }

    onAddAdditionalService({name, description, price})

    setName('')
    setDescription('')
    setPrice(0)
  };

  return (
    <div>
      <Button variant="outlined" color='primary' onClick={handleClickOpen}>
        Additional services
      </Button>
      <Dialog open={open} onClose={handleClose} onSubmit={handleSubmit}>
        <DialogTitle>Add an additional service</DialogTitle>
        <DialogContent className='add-additional-service-dialog'>

          <div className='subtitle'>
            <DialogContentText>
              Add new additional service that will be included into this fishing lesson!
            </DialogContentText>
          </div>
          
          <div className='name'>
          <TextField
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Name"
            margin="dense"
            id="name"
            label="Name"
            type="email"
            variant="outlined"
          />
          </div>

        <div className='description'>
          <TextField
            onChange={(e) => setDescription(e.target.value)}
            required
            margin="dense"
            id="description"
            label="Description"
            type="email"
            variant="outlined"
          />
        </div>   
        
        <div className="price">
                <label>Price         </label>
                <CurrencyInput
                     onChange={(e) => setPrice(e.target.value)}
                    maxLength={5}
                    prefix="$"
                    required
                    fullWidth
                    placeholder="Lesson price"
                    label="Lesson price"
                ></CurrencyInput>
            </div>

        </DialogContent>
        <DialogActions>
          <Button color='primary' onClick={handleClose}>Cancel</Button>
          <Button color='primary' onClick={handleSubmit}>Add service</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
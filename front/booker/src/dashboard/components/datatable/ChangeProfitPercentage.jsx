import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { useState, useContext } from 'react';
import { TextareaAutosize } from '@mui/material';
import { AuthContext } from '../../../components/context/AuthContext';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./circularBar.scss"

export default function ChangeProfitPercentage() {

  const { user } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const [response, setResponse] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handeChangeResponse = (e) =>
  {
    setResponse(e.target.value)
  }

  return (
    <div>
      <div className="cellAction">
        <div className="changeIncomePercentageButton" onClick={handleClickOpen}>
                  Change Income Percentage
        </div>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent style={{height:'400px', width:'400px'}}>
        <div className="circularBarWrapper">
          <div className="bottomCircularBar">
            <div className="circularBarItem">
              <CircularProgressbar value={20} text={'20%'} strokeWidth={5} />
            </div>
            <p className="titleCircularBar">Profit Percentage</p>
            <p className="amountCircularBar">{'df'}</p>
          </div>
        </div>
        </DialogContent>
        <DialogActions>
          <Button style={{color: '#0071c2'}} onClick={handleClose}>Cancel</Button>
          <Button style={{color: '#0071c2'}} onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
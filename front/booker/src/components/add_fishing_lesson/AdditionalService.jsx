import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CurrencyInput from "react-currency-input-field"
import { useState } from 'react'

export default function DeletableChips({additionalService, onDelete, onClick, handleChange, values}) {

  return (
    <Stack direction="row" spacing={1}>
      <Chip label={additionalService.name} onDelete={() => onDelete(additionalService.id)} onClick={() => onClick(additionalService.id)} defaultValue={values.maxNumAttendants} onChange={handleChange('additionalServices')}/>
    </Stack>
  );
}
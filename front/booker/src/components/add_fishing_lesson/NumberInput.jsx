import * as React from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

export default function SliderSizes() {
  return (
    <Box width={150}>
      <Slider defaultValue={5} aria-label="Default" valueLabelDisplay="on" color='secondary' min={0} max={15}/>
      <label htmlFor="">Max number of attendants</label>
    </Box>
  );
}
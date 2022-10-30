import React, { useState } from 'react'
import { Box, FormControl, FormControlLabel, FormLabel, FormHelperText, Radio, RadioGroup } from '@mui/material'

const MuiRadioButton = () => {
  const [value, setValue] = useState('');
  console.log('🚀 ~ MuiRadioButton ~ value', { value });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  return (
    /***
     * Box component create block display, with specific width if any
     * Use <FormControl /> component to control form
     * Use <RadioGroup /> component to group all radio buttons
     * Use <FormControlLabel /> component to create radio button with label
     * <FormHelperText /> component is the same as 'helperText' prop
     */
    <Box>
      <FormControl error>
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby='job-experience-group-label'
          onChange={handleChange}
          row
        >
          <FormControlLabel control={<Radio size='small' color='error' />} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio />} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio />} label='6-10' value='6-10' />
        </RadioGroup>
        <FormHelperText>Invalid Selection</FormHelperText>
      </FormControl>
    </Box>
  )
}

export default MuiRadioButton
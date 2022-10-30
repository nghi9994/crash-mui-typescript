import React, {useState} from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    /* Use split to create Array from String */
    setCountry(typeof value === 'string' ? value.split(',') : value);
  }
  return (
    /***
     * Box component create block display, with specific width if any
     * Select is created by <TextField /> component with 'select' & 'SelectProps' props
     * 'select' props is true -> TextField must have children components
     * Use <MenuItem /> component to create list item
     */
    <Box width='250px'>
      <TextField
        label='Select country'
        fullWidth
        value={country}
        onChange={handleChange}
        InputLabelProps={{ shrink: true }}
        select
        SelectProps={{ multiple: false }}
        size='small'
        color='success'
        helperText='Please select your country'
        error={!country.length}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">AUSTRALIA</MenuItem>
      </TextField>
    </Box>
  )
}

export default MuiSelect
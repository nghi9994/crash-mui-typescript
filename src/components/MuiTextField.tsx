import { Stack, TextField, InputAdornment } from '@mui/material'
import React, {useState} from 'react'

const MuiTextField = () => {
  const [value, setValue] = useState('')
  return (
    <Stack spacing={4}>
      {/***
       * TextField is input component
       * Props: label, variant, size, color (primary, success, error... ), required, InputProps...
       * 'error' prop == true changes all colors into red
       * 'helperText' prop shows small text below input
       */}
      <Stack direction='row' spacing={2}>
        <TextField label='Name' variant='filled' />
        <TextField label='Name' variant='outlined' />
        <TextField label='Name' variant='standard' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField label='Small Success' size='small' color='success' />
      </Stack>

      <Stack direction='row' spacing={2}>
        <TextField
          label='Form Input'
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your password'}
        />
        <TextField label='Password' type='password' helperText='Do not share you password' />
        <TextField label='Read Only' InputProps={{readOnly: true}} />
      </Stack>

      {/***
       * InputProps is a prop inside TextField props
       * InputProps include: readOnly, startAdornment, endAdornment...
       * startAdornment/endAdornment is a place at the beginning/end of input
       * startAdornment/endAdornment should be used with InputAdornment component
       */}
      <Stack direction='row' spacing={2}>
        <TextField
          label='Amount'
          InputProps={{
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
          }}
        />
        <TextField
          label='Weight'
          InputProps={{
            endAdornment: <InputAdornment position='end'>kg</InputAdornment>
          }}
        />
      </Stack>
    </Stack>
  )
}

export default MuiTextField
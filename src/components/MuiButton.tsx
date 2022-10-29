import React from 'react'
import { Button, Stack, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    /***
     * Stack display elements as flex column by default
     * Use IconButton to make icon as button
     */
    <Stack spacing={4}>
      <Stack direction='row' spacing={2}>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>Contained</Button>
        <Button variant='outlined'>Outlined</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='text' color='primary'>primary</Button>
        <Button variant='text' color='secondary'>secondary</Button>
        <Button variant='contained' color='success'>success</Button>
        <Button variant='contained' color='error'>error</Button>
        <Button variant='outlined' color='info'>info</Button>
        <Button variant='outlined' color='warning'>warning</Button>
      </Stack>
      <Stack display='block' direction='row' spacing={2}>
        <Button variant='contained' size='small'>small</Button>
        <Button variant='contained' size='medium'>medium</Button>
        <Button variant='contained' size='large'>large</Button>
      </Stack>
      <Stack direction='row' spacing={2}>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton aria-label='send' color='error' onClick={() => alert('Click')}>
          <SendIcon />
        </IconButton>
      </Stack>
    </Stack>
  )
}

export default MuiButton
import React from 'react'
import { Button, Stack, IconButton, ButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

const MuiButton = () => {
  return (
    /***
     * Stack display elements as flex column by default
     * Use IconButton to make icon as button
     * Use ButtonGroup to group all buttons as a group; button styles can be decided in ButtonGroup props
     */
    <Stack spacing={4}>
      {/* Button style */}
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

      {/* Button & Icon */}
      <Stack direction='row' spacing={2}>
        <Button variant='contained' startIcon={<SendIcon />} disableRipple>Send</Button>
        <Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>
        <IconButton aria-label='send' color='error' onClick={() => alert('Click')}>
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button Group */}
      <Stack direction='row'>
        <ButtonGroup
          variant='contained'
          color='warning'
          orientation='vertical'
          size='small'
          aria-label = 'align button group'
        >
          <Button onClick={() => alert('Left')}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
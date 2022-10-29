import React from 'react'
import { Button, Stack } from '@mui/material'

const MuiButton = () => {
  return (
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
    </Stack>
  )
}

export default MuiButton
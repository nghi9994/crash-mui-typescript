import React, { useState } from 'react'
import { Button, Stack, IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);

  const handleFormatChange = (event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
    setFormats(updatedFormats);
  }

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

      {/* Toggle Button Group */}
      {/***
       * ToggleButtonGroup controls all value change of each Toggle Button
       * Value prop of ToggleButton is compulsory, value's contents are whatever you set
       * Exclusive prop of ToggleButtonGroup decides single or multiple selection
       */}
      <Stack direction='row'>
        <ToggleButtonGroup
          aria-label='text formatting'
          color='success'
          onChange={handleFormatChange}
          orientation='vertical'
          value={formats}
          exclusive
        >
          <ToggleButton value='bold'>
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value='italic'>
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value='underlined'>
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton
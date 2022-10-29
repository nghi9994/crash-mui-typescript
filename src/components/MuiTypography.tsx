import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      {/***
       * component prop decides tag to show
       * gutterBottom creates margin bottom
       */}
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4'>h4 Heading</Typography>
      <Typography variant='h5' component='h1'>h5 Heading</Typography>
      <Typography variant='h6' component='p' gutterBottom>h6 Heading</Typography>

      <Typography variant='subtitle1'>Sub title 1</Typography>
      <Typography variant='subtitle2' component='li' gutterBottom>Sub title 2</Typography>

      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius?</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, eius?</Typography>
    </div>
  )
}

export default MuiTypography
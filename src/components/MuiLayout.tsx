import React from 'react'
import { Box } from '@mui/material'

const MuiLayout = () => {
  return (
    <>
      {/* Box component with 'sx' prop */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          height: '100px',
          width: '100px',
          padding: '16px',
          '&:hover': {
            backgroundColor: 'primary.light',
            cursor: 'pointer',
          }
        }}
      >
        Code evolution
      </Box>

      {/* Box component with existing prop */}
      <Box
        display='flex'
        height='100px'
        width='100px'
        bgcolor='success.light'
        p={2}
      >
        Code evolution
      </Box>
    </>
  )
}

export default MuiLayout
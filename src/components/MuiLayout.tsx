import React from 'react'
import { Box, Stack, Divider } from '@mui/material'

const MuiLayout = () => {
  return (
    /***
     * Stack create Flex display
     * Use 'flexItem' prop for Divider in flex container for right height
     */
    <Stack
      sx={{ border: '1px solid', justifyContent:' space-between' }}
      direction='row'
      // spacing={2}
      divider={<Divider flexItem orientation='vertical' />}
    >
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
    </Stack>
  )
}

export default MuiLayout
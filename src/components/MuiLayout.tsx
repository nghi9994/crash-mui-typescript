import React from 'react'
import { Box, Grid, Stack, Divider } from '@mui/material'

const MuiLayout = () => {
  return (
    /***
    * Stack create Flex display
    * Use 'flexItem' prop for Divider in flex container for right height
    */
    <>
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

      {/***
       * <Grid> component use flexbox module
       * Use 'container' prop for flex container
       * Use 'item' prop for flex items
       * xs: mobile device size
       * sm: tablet size
       * md: desktop size
       * lg: larger monitor size
       * xl: larger monitor size
       * 
       * if there is no specific column at break point -> equal columns for all children;
       * for example: 'md' prop below
       */}
      <Grid container my={4} rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6} md>
          <Box bgcolor='primary.light' p={2}>Box 1</Box>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Box bgcolor='primary.light' p={2}>Box 2</Box>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Box bgcolor='primary.light' p={2}>Box 3</Box>
        </Grid>
        <Grid item xs={12} sm={6} md>
          <Box bgcolor='primary.light' p={2}>Box 4</Box>
        </Grid>
      </Grid>
    </>
  )
}

export default MuiLayout
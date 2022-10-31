import {Box, Card, CardContent, CardActions, Button, Typography, CardMedia} from '@mui/material'

const MuiCard = () => {
  return (
    /**
     * <Card> component includes: <CardMedia>, <CardContent>, <CardActions> ... components
     * <CardMedia> component must have specific height to show image
     */
    <Box width='300px'>
      <Card>
        <CardMedia
          component='img'
          height={140}
          image='https://source.unsplash.com/random'
          alt='unsplash image'
        />
        <CardContent>
          <Typography variant='h5' component='div' gutterBottom>React</Typography>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, sed.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default MuiCard

import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Challenge = () => {
  return (
    <div class="challenges" id="challenges">
      <div class="footer">
      <div className="nut">
          <h1>Challenges</h1>
        </div>
        <div class="descc">
        <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/card1.jpg"
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            You vs The Year 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <h5>Ends in 166 day(S)</h5>
           <h5>Run or Walk 1000 km in 2023</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join Now
        </Button>
      </CardActions>
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/card2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            30 Days of Running 2023
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <h5>Ends in 15 Day(s)</h5>
           <h5>Run 10 Km Every Day</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join Now
        </Button>
      </CardActions>
    </Card>

    <Card className="card" sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/card3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Beat the Heat 2023 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <h5>Ends in 10 Day(s)</h5>
          <h5>10 Workout This Month</h5>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Join Now
        </Button>
      </CardActions>
    </Card>
          
        </div>
      </div>
    </div>
  )
}

export default Challenge

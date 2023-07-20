import React from "react";
import Hnavbar from "./hnavbar";
import { Bar } from "react-chartjs-2";
import BarChart from "./barchart";
import PieChart from "./piechart";
import DoughNut from "./Doughnut";
import Piechart1 from "./piechart1";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GoogleFit from "./GoogleFitApi";
import Header from "./Header";


function Homepage() {
  
    return ( 
        <>
    <Hnavbar/>
    
    <div class="goals" id="goals">
      
         <div className="hero">
            
         </div>

        </div>
       
       
      
    

    <div class="activity" id="activity">
      <div class="footer">
        <div className="nut">
          <h1>Activity</h1>
        </div>
        <div class="desc">
          <Piechart1 />
          </div>
          </div>

      </div>
   

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
        
          <div class="abc">
            
        </div>
      </div>
    </div>

    <div class="workout" id="workout">
      <div class="footer">
      <div className="nut">
          <h1>Workout</h1>
        </div>
        <div class="desc">
        <BarChart />
        </div>
       
          
      </div>
    </div>

    <div class="nutrition" id="nutrition">
      <div class="footer">
      <div className="nut">
          <h1>Nutrition</h1>
        </div>
        <div class="desc">
          <PieChart />
        </div>
          <div class="abc">
           
          </div>
      </div>
    </div>

    <div class="socials" id="socials">
      <div class="footer">
      <div className="nut">
          <h1>Socials</h1>
        </div>
        <div class="desc">
           <GoogleFit/>
         
        </div>
        
          <div class="abc">
           
          </div>
        </div>
    </div>

    <div class="water" id="water">
      <div class="footer">
      <div className="nut">
          <h1>Water Intake</h1>
        </div>
        <div class="desc">
          <DoughNut/>
        </div>
          
        </div>
    </div>
    </> 
     );
}

export default Homepage;
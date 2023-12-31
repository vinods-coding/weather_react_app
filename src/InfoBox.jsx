import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Infobox.css";


export default function InfoBox({ info }) {
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL ="https://images.unsplash.com/photo-1467177942249-bb110bf12f98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
          <div className="cardContainer">
         <Card sx={{ maxWidth: 345 }}>
            <CardMedia
          sx={{ height: 140 }}
          image={info.humidity > 80 ? RAIN_URL: info.temp > 15 ? HOT_URL : COLD_URL}
          title="green iguana"
         />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { info.city }
          </Typography>
          <Typography variant="body2" color="text.secondary" component = {"span"}>
           <div>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p> Min Temp = {info.tempMin}&deg;C</p>
            <p> Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as {info.weather} and feels like = {info.feelsLike}&deg;C</p>
           </div>
          </Typography>
        </CardContent>
      </Card>
      </div>
      </div>
    );
 }
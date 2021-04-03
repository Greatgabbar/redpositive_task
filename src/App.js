import { makeStyles } from '@material-ui/core/styles';
import {useEffect , useState} from 'react'
import Paper from '@material-ui/core/Paper';
import {Grid , Typography } from '@material-ui/core';
import Location from '../src/components/location';
import GMap from '../src/components/map';
import Forcast from '../src/components/forcast';
import Currency from '../src/components/currency';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function App() {
  const classes = useStyles();
  const [state,setState] = useState({
    cityName : null,
    country : null,
    humidity : null,
    temp_min : null,
    temp_max : null,
    temp : null,
    icon : null
  })
  const [pos,setPos]=useState({
    lat : null,
    alt : null
})
  useEffect(()=>{
    console.log(process.env.REACT_APP_KEY);
    navigator.geolocation.getCurrentPosition(function(position) {
      setPos({
          lat : position.coords.latitude,
          alt : position.coords.longitude
      })
      axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${process.env.REACT_APP_KEY}`).then(data=>{
        console.log(data.data);
        setState({
          cityName : data.data.name,
          country : data.data.sys.country,
          humidity : data.data.main.humidity,
          temp_min : (data.data.main.temp_min-273).toFixed(2),
          temp_max : (data.data.main.temp_min-273).toFixed(2),
          temp : (data.data.main.temp-273).toFixed(2),
          icon : data.data.weather[0]?.icon
        })
      })
    });
  },[])
  return (
    <div className="App">
      <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h3" className={classes.paper}>
            Weather
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Location data={state} />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <GMap/> */}
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;

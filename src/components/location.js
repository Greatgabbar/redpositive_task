import {Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {useState , useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    text: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const Location =(props)=>{
    const classes = useStyles();
    const [date,setDate] = useState(null);
    useEffect(()=>{
        const date= new Date();
        setDate(date);
    },[])
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return(
        <div className={classes.text}>
        <Typography variant="body1" color="secondary"> 
            {date.getHours()}:{date.getMinutes()}, {months[date.getDate()]} {date.getMonth()}
        </Typography>
        <Typography variant="h5" component="h5">
            {props.data.cityName}, {props.data.country}
        </Typography>
        <Typography variant="h4" component="h5">
            {props.data.temp}&deg;C
        </Typography>
        <Typography variant="body2" component="h5">
           min : {props.data.temp_min}&deg;C / max : {props.data.temp_max}&deg;C
        </Typography>
        </div>
    )
}

export default Location;
import {Typography , Avatar} from '@material-ui/core';
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
    avatar: {
        display: 'flex',
        justifyContent : "center",
        textAlign : 'center',
        '& > *': {
          margin: theme.spacing(2),
        }
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
    const val=date ? `${date.getHours()}:${date.getMinutes()}, ${months[date.getDate()]} ${date.getMonth()}` : null;
    return(
        <div className={classes.text}>
        <Typography variant="body1" color="secondary"> 
            {val}
        </Typography>
        <Typography variant="h5" component="h5">
            {props.data.cityName}, {props.data.country}
        </Typography>
        <div className={classes.avatar}>
        <Avatar src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`} />
        <Typography variant="h4" component="h5">
            {props.data.temp}&deg;C
        </Typography>

        </div>
        <Typography variant="body2" component="h5">
           min : {props.data.temp_min}&deg;C / max : {props.data.temp_max}&deg;C
        </Typography>
        </div>
    )
}

export default Location;
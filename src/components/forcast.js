import {Typography, Paper , Avatar,Table,TableContainer,TableHead,TableCell,TableRow,TableBody,Button,Divider,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {useState , useEffect} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    list: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    }
  }));  

const Forcast =(props)=>{
    const classes=useStyles();
    const [daily,setDaily] = useState([]);
    const [ind,setInd] = useState(1);
    const [data,Setdata] = useState([]); 
    
    const changedata = ()=>{
        if(ind+3>=daily.length)
            return;
        let i=ind+3;
        setInd(i);  
    }

    useEffect(()=>{
        console.log(props.data)
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.data.lat}&lon=${props.data.alt}&exclude=hourly,current,minutely&appid=${process.env.REACT_APP_KEY}`).then(data=>{
            setDaily(data.data.daily);
            Setdata(data.data.daily.slice(ind,ind+3))
            console.log(data.data.daily.slice(ind,ind+3))
        })
    },[props.data])

    let list=data ? data.map((ll,i)=>{
        if(i>=ind+3)
            return;
            return (
                <TableRow key={i}>
                    <TableCell>{new Date(ll.dt*1000).toString().substring(0,10)}</TableCell>
                    <TableCell>{(ll.temp.max-273).toFixed(2)}/{(ll.temp.min-273).toFixed(2)}&deg;C</TableCell>
                    <TableCell>{ll.weather[0].description}</TableCell>
                </TableRow>
            )
        }) : null;

        useEffect(()=>{
            if(daily) 
            Setdata(daily.slice(ind,ind+3))
        },[ind])

    return(
        <Container className={classes.root}>
            <Button variant="contained" color="primary" onClick={changedata}>
                Next 3 Days Forcast
            </Button>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
         {list}
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default Forcast;
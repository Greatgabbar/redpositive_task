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

const Currency =(props)=>{
    const classes=useStyles();

    useEffect(()=>{
      // axios.defaults.headers.get['Content-Type'] ='application/x-www-form-urlencoded';
      //   axios.get(`https://v2.api.forex/infos/currencies.json&api=${process.env.REACT_APP_CURKEY}`).then(data=>{
      //       console.log(data)
      //   })
    },[])

    return(
        <Container className={classes.root}>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
      <TableHead>
          <TableRow>
            <TableCell>Currency</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">%Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
              <TableCell >EURUSD</TableCell>
              <TableCell align="right">1.4745</TableCell>
              <TableCell align="right"><Typography style={{color : "green"}} >0.21%</Typography></TableCell>
          </TableRow>
          <TableRow>
              <TableCell>EURUSD</TableCell>
              <TableCell align="right">0.9866</TableCell>
              <TableCell align="right"> <Typography color="error">-0.15%</Typography></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </Container>
    )
}

export default Currency;
import { makeStyles } from '@material-ui/core/styles';
import {useEffect , useState} from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import {Grid ,Container ,Typography  } from '@material-ui/core';

const mapStyles={
    height : "100%",
    width : "100%"
}

const GMap =(props)=>{

    const [pos,setPos]=useState({
        lat : null,
        alt : null
    })

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(function(position) {
            setPos({
                lat : position.coords.latitude,
                alt : position.coords.longitude
            })
          });
    },[])

    return (
        <Container maxWidth="sm">
        <Map
          google={props.google}
          zoom={1}
        //   containerStyle={{position : "relative"}}
        //   style={{height : "50%",width:"50%"}}
          initialCenter={{ lat: pos.lat, lng: pos.alt}}
        >
          <Marker position={{ lat: pos.lat, lng: pos.alt}} />
        </Map>
        </Container>
    );
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GKEY
  })(GMap);
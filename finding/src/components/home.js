import * as React from 'react';
import {
  Button,
  Paper, Grid, Container, Card, CardActions, Typography, CardContent, CircularProgress
} from '@mui/material'
import './component.css'
import { useDispatch, useSelector } from "react-redux";
import {
  getInitialDestinations,
  getTimeTaken,
} from "../store/action/destinations";
import {
  fetchVehicles,
  getAvailableVehicles,
  getSelectedVehicles
} from "../store/action/vehicles";
import {
  fetchPlanets,
  getAvailablePlanets,
  getSelectedPlanets,
} from "../store/action/planets";
import { findFalcon, getToken } from "../store/action/findFalcon";
import Destination from './destination';

export default function Home() {
  const dispatch = useDispatch();


  React.useEffect( () => {
    //  dispatch(fetchPlanets());
    //  dispatch(fetchVehicles());
    //  dispatch (getInitialDestinations());
    //  dispatch(getToken());
    //  dispatch(findFalcon())
    dispatch(getInitialDestinations());
    dispatch(fetchPlanets());
    dispatch(fetchVehicles());
    dispatch(getToken());
     
  }, [])

  const findFalcone = async () => {
    if(allStates.findFalcon.token){
      let request = {
        token: allStates.findFalcon.token,
        planet_names: getSelectedPlanets(allStates),
        vehicle_names: getAvailableVehicles(allStates),
      };
      dispatch(findFalcon(request))
    }
  }

  const allStates = useSelector((state) => state)
  // const planets = useSelector((state) => state.planets)
  // const vehicles = useSelector((state) => state.vehicles)
  // const token = useSelector((state) => state.token);
  console.log("Home", allStates );
  return (
    <Container className='container'>
      <header className='header'>
        Finding Falcon
      </header>

      {/* {planets.length > 0 &&
          vehicles.length > 0 ? (
            <Grid container spacing={3}>
              {Object.keys(destinations).map((dest) => (
                <Grid key={dest} item xs={12} md={6} lg={3}>
                  <Paper className="paper">
                    <Destination
                      index={dest}
                      planets={getAvailablePlanets(planets)}
                      vehicles={getAvailableVehicles(vehicles)}
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          ) : <CircularProgress />
          } */}
          <Button variant="contained" onClick={findFalcone}>Hello World</Button>
    </Container>
  );
}
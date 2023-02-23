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
import { NUMBER_OF_DESTINATIONS } from '../store/constant';

export default function Home(props) {
  const dispatch = useDispatch();


  React.useEffect( () => {
     dispatch(fetchPlanets());
     dispatch(fetchVehicles());
    dispatch(getInitialDestinations());
  }, [])



  const allStates = useSelector((state) => state)
  const planets = useSelector((state) => state.planets)
  const destinations = useSelector((state) => state.destinations)
  const vehicles = useSelector((state) => state.vehicles)
  const token = useSelector((state) => state.token);


  const onReset = () => {
    getInitialDestinations();
  };

  const isAllSelected = () => {
    let planet_names = getSelectedPlanets(allStates);
    let vehicle_names = getSelectedVehicles(allStates);
    return planet_names.length === NUMBER_OF_DESTINATIONS &&
      vehicle_names.length === NUMBER_OF_DESTINATIONS 
  };

  const findFalcone = async () => {
    console.log("find")
    if (allStates.findFalcon.token) {
      let apiData = {
        token: allStates.findFalcon.token,
        planet_names: getSelectedPlanets(allStates),
        vehicle_names: getAvailableVehicles(allStates),
      };
      await dispatch(findFalcon(apiData))
      gotoResults()
    }
  }

  const gotoResults = () =>{
    console.log('gotoResults', props)
  }

  return (
    <>
    <Container className='container'>
      <header className='header'>
        Finding Falcon
      </header>
      {allStates && planets && planets.length > 0 &&
        vehicles && vehicles.length > 0 ? (
          <Grid container spacing={3}>

          {Object.keys(destinations).map((dest) => (
            <Grid key={dest} item xs={12} md={6} lg={3}>
              <Paper className="paper">
                <Destination
                  index={dest}
                  planets={getAvailablePlanets(allStates)}
                  vehicles={getAvailableVehicles(allStates)}
                ></Destination>
              </Paper>
            </Grid>
          ))}
        </Grid>
          ) : <CircularProgress />
          }
       <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Card variant="outlined">
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Time Taken
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {getTimeTaken(allStates)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    disabled ={!isAllSelected}
                    variant="outlined"
                    size="medium"
                    color="primary"
                    onClick={findFalcone}
                  >
                    Find Falcone
                  </Button>
                  <Button size="medium" onClick={onReset}>
                    Reset
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
    </Container>
    </>
  );
};
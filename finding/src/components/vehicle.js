import React from 'react';
import {
    InputLabel,
    FormControl,
    NativeSelect,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import './component.css';
import {vehicleSelected } from '../store/action/destinations';
import { connect, useDispatch, useSelector } from "react-redux";

  function Vehicle(props) {
  const allStates = useSelector((state) => state);
  const dispatch = useDispatch();
  const [vehicles, setVehicle] = React.useState([]);

  React.useEffect(() => {
    console.log("Veh", props)
    setVehicle(props.vehicles)
  },[])

  const onVehicleSelect = (event) => {
    let selectedPlanet = getCurrentPlanet();
    let distance = selectedPlanet[0].distance;
    let vehicleObj = props.vehicles.filter(
      (veh) => veh.name === event.target.value
    );
    let speed = vehicleObj.length ? vehicleObj[0].speed : 1;
    let time = distance / speed;

    props.vehicleSelected({
      timetaken: time,
      selectedVehicle: event.target.value,
      destination: props.destinationGroup,
    });
  };

  const getCurrentPlanet = () => {
    let state = allStates;
    let currentDest = props.destinationGroup;
    let currentPlanet = state.destinations[currentDest].selectedPlanet;
    return state.planets.filter((planet) => planet.name === currentPlanet);
  };

  const getIsRangeLess = (vehicleMaxDistance) => {
    console.log("Vehicle", vehicleMaxDistance)
    let planet = getCurrentPlanet();
    let distance = planet[0] ? planet[0].distance : 0;
    return distance > vehicleMaxDistance;
  };


  return (
    <>
     <div className="vehicleList">
        {vehicles.map((vehicle) => {
          let index = vehicles.indexOf(vehicle);
          let isRangeLess = getIsRangeLess(vehicle.max_distance);
          console.log("is range: " + isRangeLess)
          return (
            <div key={index}>
              <FormControlLabel
                  control={<Radio color="primary"/>}
                  label={`${vehicle.name} (${vehicle.total_no})`}
                  key={vehicles.indexOf(vehicle)}
                  type="radio"
                  value={vehicle.name}
                  onClick={onVehicleSelect}
                  speed={vehicle.speed}
                  disabled={vehicle.total_no === 0 || isRangeLess ? true : false}
                  />
            </div>
          );
        })}
      </div>
    </>
   
  )
}
export default  Vehicle;

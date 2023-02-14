import {
  getInitialDestinationAction,
  addDestinationAction,
  vehicleSelectedAction,
} from "./actions";
import { NUMBER_OF_DESTINATIONS } from "../constant";

export const getInitialDestinations = () => (dispatch) => {
  const destinations = [];
  for (let i = 1; i <= NUMBER_OF_DESTINATIONS; i++) {
    destinations.push("destination" + i);
  }
  dispatch(getInitialDestinationAction(destinations));
};

export const addDestination = (data) => (dispatch) => {
  dispatch(addDestinationAction(data));
};

export const vehicleSelected = (data) => (dispatch) => {
  dispatch(vehicleSelectedAction(data));
};

export const getTimeTaken = (state) => {
  let timeTaken = 0;
  Object.keys(state.destinations).forEach((key) => {
    if (state.destinations[key]) {
      let curr_time = state.destinations[key].timeTaken;
      if (curr_time) {
        timeTaken += curr_time;
      }
    }
  });
  return timeTaken;
};

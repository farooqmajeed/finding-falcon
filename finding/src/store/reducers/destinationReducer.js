import { createReducer } from "@reduxjs/toolkit";
import { getInitialDestinationAction, addDestinationAction, vehicleSelectedAction} from '../action/actions'

const reducer = createReducer(
    {},
    {   
        [getInitialDestinationAction.type]: (destination, action) =>{
            action.payload.array.forEach(element => {
                destination[element] = {}
            });
        }
    },
    {
        [addDestinationAction.type]: (destination, action) =>{
            destination[action.destination] = {
                selectPlanet = action.payload.value,
                showVehicle = true
            }
        };
    },
    [vehicleSelectedAction.type]: (destination, action) =>{
        const { timeTaken, selectedVehicle, destination } = action.payload;
    }
)
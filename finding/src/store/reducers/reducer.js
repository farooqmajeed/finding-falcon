import { combineReducers } from "redux";
import planetsReducer from "./planetsReducer";
import vehiclesReducer from "./vehiclesReducer";
import destinationReducer from "./destinationReducer";
import findFalconReducer from "./findFalconReducer";
import  errorReducer  from './errorReducer';
// 
export default combineReducers({
    planets : planetsReducer,
    vehicles : vehiclesReducer,
    destinations : destinationReducer,
    findFalcon : findFalconReducer,
    error: errorReducer
});
import { createAction } from "@reduxjs/toolkit";


export const fetchPlanetAction = createAction("fetchPlanetAction");
export const fetchVehiclesAction = createAction("fetchVehiclesAction");

export const getInitialDestinationsAction = createAction("getInitialDestinationsAction");
export const addDestinationAction = createAction("addDestination");
export const vehicleSelectedAction = createAction("vehicleSelected");

export const findFalconAction = createAction("findFalconAction");
export const fetchTokenAction = createAction("fetchTokenAction");

export const onError = createAction("onError");
export const resetErrorAction = createAction("resetErrorAction");


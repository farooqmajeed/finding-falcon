import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetAction } from "../action/actions";

const reducer = createReducer([], {

  [fetchPlanetAction.type]: (planets, action) => {
    console.log("action", action.payload, planets)
    return action.payload;
  },
});

export default reducer;

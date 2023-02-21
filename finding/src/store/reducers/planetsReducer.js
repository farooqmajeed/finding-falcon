import { createReducer } from "@reduxjs/toolkit";
import { fetchPlanetAction } from "../action/actions";

const reducer = createReducer([], {
  [fetchPlanetAction.type]: (planets, action) => {
    return action.payload;
  },
});

export default reducer;

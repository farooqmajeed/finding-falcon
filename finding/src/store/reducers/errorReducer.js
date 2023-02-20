import { createReducer } from "@reduxjs/toolkit";
import { resetErrorAction } from "../action/actions"

const reducer = createReducer(
  {},
  {
    onError: (error, action) => ({
      error: action.error,
    }),
    [resetErrorAction.type]: (error, action) => ({}),
  }
);

export default reducer;

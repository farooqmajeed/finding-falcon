import axios from "axios";
import * as url from "../constant";
import { findFalconAction, fetchTokenAction } from "./actions";

//actions
import {
  NUMBER_OF_DESTINATIONS,
  FIND_FALCONE_FAILED_MSG,
  NOT_SELECTED_MSG,
  FETCH_TOKEN_FAILED_MSG,
} from "../constant";

export const findFalcon = (requestPayload) => async (dispatch) => {
  if (
    requestPayload.planet_names &&
    requestPayload.planet_names.length !== NUMBER_OF_DESTINATIONS &&
    requestPayload.vehicle_names &&
    requestPayload.vehicle_names.length !== NUMBER_OF_DESTINATIONS
  ) {
    dispatch({
      type: "onError",
      error: NOT_SELECTED_MSG,
    });
    return;
  }

  return dispatch({
    type: "apiCallBegan",
    payload: {
      url: url.FIND_FALCONE_API,
      method: "post",
      data: requestPayload,
      onSuccess: findFalconAction.type,
      onError: FIND_FALCONE_FAILED_MSG,
    },
  });
};

export const getToken = () => async (dispatch) => {
  axios.defaults.headers.common["Accept"] = "application/json";

  return await axios
    .post(url.AUTH_TOKEN_URL)
    .then((response) => {
      dispatch(fetchTokenAction(response.data));
    })
    .catch((error) => {
      dispatch({
        type: "onError",
        error: FETCH_TOKEN_FAILED_MSG,
      });
    });
};

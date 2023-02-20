import axios from 'axios';
import { baseURL } from '../constant';

const api = ({ dispatch}) => next => async action =>{
    if (action.type !== "apiCallBegin") return next(action);
    next(action);
    const { url, method, data, onSuccess, onError} = action.payload;
    try{
        const response = await axios.request({
            baseURL, url, method, data

        })
        dispatch({ type:onSuccess, payload: response.data});
        console.log("response", response.data)
    } catch (error) {
        dispatch({ type: "onError", error:`${error.message} (${onError})`});
    }
}
export default api;
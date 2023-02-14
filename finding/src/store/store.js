import { configureStore } from '@reduxjs/toolkit';
import reducer from "../store/reducers/reducer";
import api from "./middleware/api"

export default function () {
    return configureStore({ 
        reducer,
        middleware: [
            api
        ]
        
    });
}

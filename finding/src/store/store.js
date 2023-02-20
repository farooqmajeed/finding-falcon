import { configureStore } from '@reduxjs/toolkit';
import reducer from "../store/reducers/reducer";
import api from "./middleware/api";
import { getDefaultMiddleware } from '@reduxjs/toolkit';

export default function () {
    return configureStore({ 
        reducer,
        middleware: [
            ...getDefaultMiddleware(),
            api
        ]
        
    });
}

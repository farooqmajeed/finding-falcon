import React from 'react';
import {
    InputLabel,
    FormControl,
    NativeSelect,
    RadioGroup
} from '@mui/material';
import './component.css'
import { SELECT_DEST_MSG } from '../store/constant';
import { connect, useDispatch, useSelector } from "react-redux";
import {
    addDestination
  } from "../store/action/destinations";

function Destination(props) {
    const destination = useSelector((state) => state.destination)
    const dispatch = useDispatch();
    React.useEffect(() => {
        console.log('Destination props', props);
    }, [])

    const onDestinationChange = (event) => {
        dispatch(addDestination({
            destination: props.index,
            value: event.currentTarget.value
        }))
    }


    //    const getClassName = () => {
    //         let destinations = destination;
    //         let currentDest = destinations[this.props.index];
    //         return currentDest.selectedVehicle ? "selected" : "unselected";
    //       };

    return (
        <div className='destination'>
            <FormControl className='destination-select'>
                <InputLabel htmlFor="outlined-age-native-simple" >
                    {SELECT_DEST_MSG}
                </InputLabel>
                {/* <NativeSelect value={selectedValue} onChange={(event) => {onDestinationChange(event)}} label="Destination">
                    <option value={selectedValue}>{selectedValue}</option>
                    {optionItems}
                </NativeSelect> */}
            </FormControl>
        </div>

    )
}

export default  Destination;
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
    const allStates = useSelector((state) => state)
    const dispatch = useDispatch();
    // const [planets, setPlanets] = React.useState([]);
    // const [selectedValue, setSelectedValue] = useSelector("");
    // const [option, setOptions] = useSelector();
    React.useEffect(() => {
        console.log('Destination props', allStates);
        // setPlanets(allStates.planets);
        // let currentDestination = props.index;
        // let optionItems = planets.map((planet) => (
        //     <option key={planet.name}>{planet.name}</option>
        //   ));
        //   setOptions(setOptions);
        // let selectedValueItem =
        // allStates.destinations[props.index].selectedPlanet ||
        // SELECT_DEST_MSG;
        // console.log(selectedValueItem)

        // setSelectedValue(selectedValueItem);

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
                    {option}
                </NativeSelect> */}
            </FormControl>
        </div>

    )
}

export default  Destination;
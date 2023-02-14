import * as React from 'react';
import {
    Button,
    Paper, Grid, Container, Card, CardActions, Typography, CardContent,CircularProgress
} from '@mui/material'
import './component.css'
import {useDispatch, useSelector} from "react-redux";
import {
    getInitialDestinations,
    getTimeTaken,
  } from "../store/action/destinations";

export default function Home() {
    const dispatch = useDispatch();

    React.useEffect((async) => {
        dispatch(getInitialDestinations());
    }, [])


  return (
    <Container className='container'>
        <header className='header'>
            Finding Falcon
        </header>
      <Button variant="contained">Hello World</Button>
    </Container>
  );
}
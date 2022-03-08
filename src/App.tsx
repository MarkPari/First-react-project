import React, { CSSProperties, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/RickeMorty';
import { CircularProgress, Grid } from '@material-ui/core';
import { character, RickyMorty } from './models/RickyMorty';
import { ClassNames } from '@emotion/react';
import { Skeleton } from '@mui/material';
import { consumers } from 'stream';
import { useCharacter } from './hooks/useChar';


const App = () => {
  //const [data, setData] = useState<character[]>();
  const [data, setData, isLoading] = useCharacter('character')
  const [favourites, setFavourites] = useState<character[]>([]);
  //const [isLoading, setIsLoading] = useState(true);
  const arr = Array.from({length: 8})
  
  /*const char = () => fetch('https://rickandmortyapi.com/api/character').then((res)=> res.json())
  .then(res=> setTimeout(()=>{
    setIsLoading(false);
    return setData(res.results);
  }, 2000));

  useEffect(()=>{
    char();
  },[])*/


  const remove = (idToRemove: number) => {
    const index = data.findIndex(({id}) => idToRemove === id);
    if (index !== -1) {
      data.splice(index, 1);
      setData([...data]);
    }
  }
  const onSelectedItem = (idSelected: number) => {
    const indexInCharacters = data.findIndex(({id}) => idSelected === id);
    const indexInFavourites = favourites.findIndex(({id}) => idSelected === id);
    if (indexInCharacters >= 0) {
      setFavourites([data[indexInCharacters], ...favourites]);
      data.splice(indexInCharacters, 1);
      setData([...data]);
    } else if (indexInFavourites >= 0) {
      setData([favourites[indexInFavourites], ...data]);
      favourites.splice(indexInFavourites, 1);
      setFavourites([...favourites]);
    }
  } 
  

  return (<>
  <h3>Favourites</h3>
  <Grid container spacing={2}>
  {favourites.map(item=>{
    return (
      <Grid key={item.id} item xs={6} md={4}>
      <MyCard  character={item} removeItem={remove} addToFavourites={onSelectedItem}/>
    </Grid>
    )
  })}</Grid>
  <h3>All cards</h3>
  <Grid container spacing={2}> 
    {(data && !isLoading) ? 
    data.map(char=> {
    return (<Grid key={char.id} item xs={6} md={4}>
        <MyCard  character={char} removeItem={remove} addToFavourites={onSelectedItem}/>
      </Grid>) 
  }) : arr.map((_, index)=> {
    return (<Grid key={index} item xs={6} md={4}>
      <Skeleton variant="rectangular" animation="wave" width={330} height={450} />
      </Grid>)})}
    </Grid>
    </>);
}


export default App;

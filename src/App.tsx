import React, { CSSProperties, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyCard from './components/Person';
import MyCard from './components/RickeMorty';
import { CircularProgress, Grid } from '@material-ui/core';
import { character, RickyMorty } from './models/RickyMorty';
import { ClassNames } from '@emotion/react';
import { Skeleton } from '@mui/material';
import { consumers } from 'stream';
/*const people = [
  {name: "Marco", surname: "Parisi", img: "http://www.comune.taurianova.reggio-calabria.it/img/public/utente-icona-maschile_17-810120247.jpg", describe: "simple person"},
  {name: "Federico", surname: "Partesano", img: "http://www.comune.taurianova.reggio-calabria.it/img/public/utente-icona-maschile_17-810120247.jpg", describe: "simple person"},
  {name: "Alessandro", surname: "Aiossa", img: "http://www.comune.taurianova.reggio-calabria.it/img/public/utente-icona-maschile_17-810120247.jpg", describe: "simple person"},
  {name: "Salvo", surname: "Di Caro", img: "http://www.comune.taurianova.reggio-calabria.it/img/public/utente-icona-maschile_17-810120247.jpg", describe: "simple person"}
]   
function App() {
  return (<>
    <Grid container spacing={2}>
      {people.map((person, index)=>{
        return (<Grid item xs={6} md={4}>
          <MyCard key={index} user={person} />
        </Grid>)
      })}
    </Grid>
  </>)
}*/

const App = () => {
  const [data, setData] = useState<character[]>();
  const [favourites, setFavourites] = useState<character[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const arr = Array.from({length: 8})
  
  /*const deleteCard = (id: number) => {
    setData(data?.splice(id, 1))
  }*/
  
  const char = () => fetch('https://rickandmortyapi.com/api/character').then((res)=> res.json())
  .then(res=> setTimeout(()=>{
    setIsLoading(false);
    return setData(res.results);
  }, 2000));

  useEffect(()=>{
    char();
  },[])

  

  return (<>
  <h3>Favourites</h3>
  {favourites.map(item=>{
    const removeItem1 = (idToRemove: number) => {
      const index = favourites?.findIndex(({id})=>id==idToRemove);
      if(index!==-1) {
        favourites?.splice(index, 1)
        setFavourites([...favourites])
      }
    }

    const addToFavourites1 = (idToAdd: number) => {
      const fav = favourites.find(item=>item.id==idToAdd);
      if(!fav) return;
      data?.push(fav);
      removeItem1(idToAdd)
    }
    return (<Grid container spacing={2}>
    <Grid key={item.id} item xs={6} md={4}>
      <MyCard  character={item} removeItem={removeItem1} addToFavourites={addToFavourites1}/>
    </Grid>
    </Grid>)
  })}
  <h3>All cards</h3>
  <Grid container spacing={2}> 
    {(data && !isLoading) ? 
    data.map(char=> {

    const removeItem = (idToRemove: number) => {
      const index = data?.findIndex(({id})=>id==idToRemove);
      if(index!==-1) {
        data?.splice(index, 1)
        setData([...data])
      }
    }
    const addToFavourites = (idToAdd: number) => {
      const fav = data.find(item=>item.id==idToAdd);
      if(!fav) return;
      favourites.push(fav);
      console.log("favourites: ", favourites)
      removeItem(idToAdd)
    }


    return (<Grid key={char.id} item xs={6} md={4}>
        <MyCard  character={char} removeItem={removeItem} addToFavourites={addToFavourites}/>
      </Grid>) 
  }) : arr.map((_, index)=> {
    return (<Grid key={index} item xs={6} md={4}>
      <Skeleton variant="rectangular" animation="wave" width={330} height={450} />
      </Grid>)})}
    </Grid>
    </>);

  /*return (<>
  <Grid container spacing={2}>
  {data && data.map(char=> {
  return (<Grid key={char.id} item xs={6} md={4}>
    {
    isLoading ? <Skeleton variant="rectangular" animation="wave" width={210} height={118} /> : 
    <MyCard  character={char} />
    }
    </Grid>)
})}
  </Grid>
  </>);*/
}


export default App;

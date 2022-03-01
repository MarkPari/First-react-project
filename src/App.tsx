import React, { CSSProperties, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
//import MyCard from './components/Person';
import MyCard from './components/RickeMorty';
import { CircularProgress, Grid } from '@material-ui/core';
import { character, RickyMorty } from './models/RickyMorty';
import { ClassNames } from '@emotion/react';
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
  const [isLoading, setIsLoading] = useState(true);

  /*const deleteCard = (id: number) => {
    setData(data?.splice(id, 1))
  }*/
  
  const char = () => fetch('https://rickandmortyapi.com/api/character').then((res)=> res.json()).then(res=> setTimeout(()=>{
    setIsLoading(false);
    return setData(res.results);
  }, 2000));//setData(res.results)

  useEffect(()=>{
    //setTimeout(char, 2000)
    char();
  },[])


  return (<>{isLoading && <div className='myCont'><div className='myLoader'><CircularProgress/></div></div>}
  <Grid container spacing={2}>
  {data && data.map(char=> {
  return (<Grid key={char.id} item xs={6} md={4}>
    <MyCard  character={char} />
    </Grid>)
})}
  </Grid>
  </>);
}

export default App;

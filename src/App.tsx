import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyCard from './components/Person';
import { Grid } from '@material-ui/core';
const people = [
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
}

export default App;

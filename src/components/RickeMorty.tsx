import React, { CSSProperties, useEffect, useState, FC } from 'react';
import './Person.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { character, RickyMorty } from '../models/RickyMorty';

type RemoveItemFunction = (_:number) => void;
type MediaCardProps = {character: character, addToFavourites: (_:number)=>void, removeItem: RemoveItemFunction/*oppure direttamente (_:number) => void*/}

const MyCard: FC<MediaCardProps> = ({character, addToFavourites, removeItem, children}) => {
    const {name, image, status, id} = character;
    let [elev, setElev]= useState(2 as 2 | 10) ;

    const style: CSSProperties =  {
        color: "red",
        fontSize: 20   //dove ci sono i - si inserisce il camel case perchè js non riconosce -
    };
    return <Card className='margin' sx={{ maxWidth: 345 }} elevation={elev} onMouseEnter={(_) => setElev(10)} onMouseLeave={(_)=> setElev(2)}> 
      <CardMedia
        component="img"
        //height="140"
        image={image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         nome: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          stato: {status}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => removeItem(id)} size="small">Delete</Button>
        <Button onClick={() => addToFavourites(id)} size="small">Switch</Button>
      </CardActions>
    </Card>


}

export default MyCard; 
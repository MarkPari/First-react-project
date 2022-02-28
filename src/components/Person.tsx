import React, { CSSProperties } from 'react';
import './Person.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


type Person = {name: string, surname: string, img: string, describe: string}

/*const Card = (props: {people: Person}) => {
    return <div className='card'>
        <h3>{props.people.surname} {props.people.name}</h3>  
        <img className='img' src={props.people.img} alt="immagine utente"/>   
        <p>{props.people.describe}</p>  
    </div>
}*/
/*const Card = ({name, surname, img, describe}: Person) => {
    const style: CSSProperties =  {
        color: "red",
        fontSize: 20   //dove ci sono i - si inserisce il camel case perchè js non riconosce -
    };
    return <div className='card'>
        <h3 style={style}>{surname} {name}</h3>  
        <img className='img' src={img} alt="immagine utente"/>   
        <p>{describe}</p>  
    </div>
}*/

/*const Card = ({user:{name, surname, img, describe}}: {user: Person}) => {
    return <div className='card'>
        <h3>{surname} {name}</h3>  
        <img className='img' src={img} alt="immagine utente"/>   
        <p>{describe}</p>  
    </div>
}*/


const MyCard = (props: {user: Person}) => {
    const user = props.user;
    const {name, surname, img, describe} = user;
    const style: CSSProperties =  {
        color: "red",
        fontSize: 20   //dove ci sono i - si inserisce il camel case perchè js non riconosce -
    };
    return <Card className='margin' sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        //height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {surname} {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {describe}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>


}

export default MyCard; 
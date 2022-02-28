import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from './components/Title';
import MyCard from './components/Person';
//import reportWebVitals from './reportWebVitals';

//const Pippo = () => <p>Ciao</p>
//equivalente
/*const Paragraph1 = () =>{ 
  const person = {name: "Marco", surname: "Parisi"};
  const person2 = {name: "Mario", surname: "Merola"};
  return (
  <>
    <p className='red'>Ciao {person.name}</p>
    <p>Ciao {person2.name}</p>
  </>)
}
const Paragraph2 = () =>{ 
  const person = {name: "Mario", surname: "Merola"};
  return (<h3>Ciao {person.name}</h3>)
}

const people = [{name: "Marco", surname: "Parisi"}, {name: "Mario", surname: "Merola"}]*/

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
/*ReactDOM.render(
  //<React.StrictMode>
  //people.map(item=><Title name={item.name}/>),
  //people.map(item=><Card people={item} />,
  //people.map(item=><Card name={item.name} surname={item.surname} img={item.img} describe={item.describe}/>),
  <App />,
  //</React.StrictMode>,
  document.getElementById('root')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

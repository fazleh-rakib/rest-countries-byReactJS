import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries (){
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data => setCountries(data))
  },[])
  return(
    <div>
      <h2>Load All Countries</h2>
      <p>countries : {countries.length}</p>
      {
        countries.map(country => <Country name={country.name.common} capital={country.capital}></Country>)
      }
    </div>
  )
}
function Country (props){
  return(
    <div className='container'>
      <h2>Country : {props.name}</h2>
      <h3>Capital : {props.capital}</h3>
    </div>
  )
}

export default App;

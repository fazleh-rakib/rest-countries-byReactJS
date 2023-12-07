import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountries(data))
    },[])
    return (
        <div>
            <h2>Loading All Countries {countries.length}</h2>
            {
                countries.map(country => console.log(country, 'country'))
            }
            {
                countries.map(country =><Country
                     name={country.name.common}
                     capital={country.capital} 
                     population ={country.population}
                     img= {country.flags.png}
                     />)
            }
            
        </div>
    );
};

export default Countries;
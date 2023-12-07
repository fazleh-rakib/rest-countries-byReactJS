import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props);
    return (<div>
         
        <div className='country'>
            <img src={props.img} alt="" />
            <h2>Name : {props.name} </h2>
            <p>Capital : {props.capital}</p>
            <p>Population : {props.population}</p>
        </div>
        </div>
    );
};

export default Country;
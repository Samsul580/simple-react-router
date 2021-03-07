import React from 'react';
import { Link } from 'react-router-dom';

const Country = ({country}) => {
    const {name, capital} = country;
    return (
        <div>
            <h2>Country Name: {name}</h2>
            <h4>Capital: {capital}</h4>
            <Link to={`/country/${name}`}>Show Countary details of {name}</Link>
        </div>
    );
};

export default Country;
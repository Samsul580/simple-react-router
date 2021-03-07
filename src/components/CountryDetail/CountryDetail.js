import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CountryDetail = () => {
    const {countryName} =useParams();
    const [country, setCountry] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setCountry(data[0]))
        .catch(error => console.log(error))
    }, [])
    const {name, capital, language, population, region} = country;
    return (
        <div>
            <h1>Details of {name}</h1>
            <h4>Capital: {capital}</h4>
            <h4>Population: {population} </h4>
            <h4>Region: {region}</h4>
        </div>
    );
};

export default CountryDetail;
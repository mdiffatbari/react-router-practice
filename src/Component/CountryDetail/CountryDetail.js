import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [countryDetail1, setCountryDetail1] = useState([]);
    useEffect(() => {
        const url = `https://restcountries.com/v3.1/name/${countryName}`;
        fetch(url)
            .then((res) => res.json())
            .then(data => setCountryDetail1(data))
    }, [countryName ]);
    
    const divStyles = {
        textAlign: 'center',
        backgroundColor: 'lightCoral',
        color: 'white',
        width: '60%',
        margin: '50px auto',
        padding: '80px',
        borderRadius: '20px'
    }

    const linkStyles = {textDecoration: 'none', fontSize: '20px', color: 'black'}
    const buttonStyle = { padding: '10px 30px', border: 'none', borderRadius: '5px' }
    
    return (
        <div style={divStyles}>
            <img style={{width: '250px', }} src={countryDetail1[0]?.flags.png} alt="" />
            <h1>Country Name : {countryDetail1[0]?.name.common}</h1>
            <h3>Capital: {countryDetail1[0]?.capital}</h3>
            <h3>population: {countryDetail1[0]?.population}</h3>
            <button style={buttonStyle}><a target="_blank" rel="noopener noreferrer" style={linkStyles} href={countryDetail1[0]?.maps.googleMaps}>Map</a></button>
        </div>
    );
};

export default CountryDetail;
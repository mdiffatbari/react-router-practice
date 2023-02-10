import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [allCountries, setAllCountries] = useState([]);
    useEffect(() => {
        const url = 'https://restcountries.com/v3.1/all';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllCountries(data));
    }, []);
    return (
        <div>
            {
                allCountries.map(country => <Country key={country.cca2} country={country}></Country>)
            }
        </div>
    );
};

export default Home;
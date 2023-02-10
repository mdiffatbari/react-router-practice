import React from 'react';
import { Link } from 'react-router-dom';

const Country = (props) => {
    const {name, capital, area, flags} = props.country;
    return (
        <div style={{ display: 'flex', alignItems: 'center' , border: '2px solid gray', borderRadius: '10px', margin: '20px', padding: '20px'}}>
            <div style={{width: '50%'}} className="infoLeft">
                <h1>Name: {name.common}</h1>
                <h1>Capital Name : {capital}</h1>
                <h3>Area: {area}</h3>
                <Link to={`/name/${name.common}`}><button>Click Me</button></Link>
            </div>
            <div style={{width: '50%', textAlign: 'right'}} className="infoRight">
                <img style={{width: '250px', }} src={flags.png} alt="" />
            </div>
        </div>
    );
};

export default Country;
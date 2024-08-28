import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Countries</h1>
      <div className="row">
        {countries.map((country, index) => (
          <div key={index} className="col-md-4">
            <div className="card mb-4">
              <img src={country.flags.png} className="card-img-top" alt={country.name.common} />
              <div className="card-body">
                <h5 className="card-title">{country.name.common}</h5>
                <p className="card-text">Capital: {country.capital ? country.capital[0] : 'N/A'}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countries;

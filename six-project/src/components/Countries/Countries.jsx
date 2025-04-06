import React, { use, useState } from 'react';
import Country from '../country/Country.jsx';
import styles from './Countries.module.css'

const Countries = ({countriesPromise}) => {
  const countriesData = use(countriesPromise);
  // console.log(countriesData);
  const divStyle = {
    textAlign:'center', 
    marginBottom: '20px',
  }
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (countryName) => {
    if(!visitedCountries.includes(countryName)){
      const newCountries = [...visitedCountries, countryName];
      setVisitedCountries(newCountries);
    }
    else{
      const idx = visitedCountries.indexOf(countryName);
      const newCountries = visitedCountries.toSpliced(idx,1);
      setVisitedCountries(newCountries);
    }
  }
  
  // console.log(visitedCountries);

  const handleVisitedFlags = (flag) => {
    const newFlags = [...visitedFlags, flag];
    setVisitedFlags(newFlags);
    console.log(flag);
  }
  return (
    <>
    <div>
      <h1 style={divStyle}>Countries</h1>
      <p style={divStyle}>Total Country: {countriesData.length}</p>
      <h2>Travel country: {visitedCountries.length}</h2>
      <ul>
        {visitedCountries.map((cnt,idx) => <li key={idx}>{cnt}</li>)}
      </ul>
      <h2>Travel flags: {visitedFlags.length}</h2>
      <ul>
        {visitedFlags.map((flag, idx) => <img key={`flag-${idx}`} src={flag}></img>)}
      </ul>
    </div>
    <div className={styles.coutriesContainer}>
      {
        countriesData.map((country,idx) => {
          return <Country key={`country-${idx}`} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags} country={country}></Country>;
        })
      }
    </div>
    </>
  );
};

export default Countries;
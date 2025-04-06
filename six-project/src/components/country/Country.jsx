import React, { use, useState } from 'react';
import styles from './Country.module.css';
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
  const buttonStyle ={
    padding: '6px 12px',
    borderRadius: '8px',
    fontSize: '18px',
  }
  const [visited, setVisited] = useState(false);
  const visitedOrNot = () => {
    // visited ? setVisited(false):setVisited(true);
    setVisited(!visited);
    handleVisitedCountries(country.name.common);
  }

  return (
    <div style={{border:'2px solid black', borderRadius: '12px', padding: '10px'}} className={`${visited && styles.visitedCountry}`}>
      <div style={{}}>
        <img src={country.flags.png} alt="flags" style={{width: '100%'}} />
      </div>
      <div style={{textAlign:'center'}}>
        <h4>Name: {country.name.common}</h4>
        <p>Independent: {country.independent ? 'Free':'Not Free'}</p>
        <p>Population: {country.population}</p>
        <button style={buttonStyle} onClick={visitedOrNot}>{visited ? 'Visited':'Not Visited'}</button>
        <button style={buttonStyle} onClick={()=> handleVisitedFlags(country.flags.png)}>Add flags</button>
      </div>
    </div>
  );
};

export default Country;
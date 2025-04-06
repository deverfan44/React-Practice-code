import './App.css'
import { Suspense } from 'react';
import Countries from './components/countries/Countries.jsx'

// https://openapi.programming-hero.com/api/words/all
const fetchCountries = async() => {
  try {
    // const res = await fetch('https://restcountries.com/v3.1/name/bangladesh');
    const res = await fetch('https://restcountries.com/v3.1/all');
    // const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    return await res.json();
  }
  catch (error) {
    console.error('Fetch error:', error);
  }
}

function App() {
  const countriesPromise = fetchCountries();
  return(
    <>
      <Suspense fallback={<h2>Data is loading....</h2>}>
        <Countries countriesPromise = {countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App

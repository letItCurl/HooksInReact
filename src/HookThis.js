import React, {useState} from 'react';
import Increase from './Increase'

function HookThis() {
/*
  const [state, setState ] = useState({
    city: '',
    country: ''
  })
  //Hold paradigme
*/
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  const handleCityChange = (event) => setCity(event.target.value)
  const handleCountryChange = (event) => setCountry(event.target.value)
  return (
    <div className="container">
      <Increase></Increase>
      <input type="text" placeholder="City" value={city} onChange={handleCityChange}></input>
      <input type="text" placeholder="Country" value={country} onChange={handleCountryChange}></input>
      <div>
        you live in {`${city}, ${country}`}
      </div>
    </div>
  );
}

export default HookThis;

import React from 'react';
import WeatherCard from './WeatherCard.jsx';

export default function Weather_app(){
    
    const [city, setCity] = React.useState('');
  const [weather, setWeather] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

    // This function handles the change event of the input field. It updates the city state with the value entered by the user.
    // The city state is used to store the name of the city for which the weather data will be fetched.
    const handlerChange = (e) =>{
        setCity(e.target.value);
    }
    // This function handles the search button click event. It sets the loading state to true, clears any previous error messages, and fetches the weather data from the OpenWeatherMap API using the city name entered by the user.
    // If the API call is successful, it updates the weather state with the fetched data. If an error occurs (e.g., city not found), it sets the error state with the error message and resets the weather state to null. Finally, it sets the loading state to false.
    const handlesearch = async () => {
            setLoading(true);
            setError('');
            try {
              const apiKey = process.env.REACT_APP_WEATHER_KEY; // Make sure to set your API key in the .env file
              console.log(apiKey);
              if (!apiKey) throw new Error('API key is missing');
              const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
              );
              if (!res.ok) throw new Error('City not found');
              const data = await res.json();
              setWeather(data);
            } catch (err) {
              setError(err.message);
              setWeather(null);
            }
            setLoading(false);
    };
    return ( 
      <>
        <div className="container">
            <h1>Weather App</h1>
            <div className="search-bar">
                <input 
                type="text" 
                placeholder="Enter city name"
                onChange={handlerChange} />
                
            </div>
            <div className="button-info">
            <button onClick={handlesearch}>Search</button>
            {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {weather && <WeatherCard weather={weather} />}
            </div>
        </div>
        </>
    );
};

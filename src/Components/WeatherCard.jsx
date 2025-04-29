import React from 'react';

const WeatherCard = ({ weather }) => { 
    // This component receives the weather data as a prop and displays it in a card format.
    // It destructures the weather data to extract relevant information such as temperature, humidity, wind speed, and weather description.
    // The component also includes an image representing the weather condition.
    // The weather data is expected to be in the format returned by the OpenWeatherMap API.
    const { main, weather: weatherDetails, wind, sys } = weather;
    const { temp, humidity } = main;
    const { speed } = wind;
    const { country } = sys;
    const { description, icon } = weatherDetails[0];
    
    return (
        <>
        <div className="weather-card">
        <h2>{`${weather.name}, ${country}`}</h2>
        </div>
        <div className="weather-details">
            <img src={`http://openweathermap.org/img/wn/${icon}.png`} alt={description} />
            <p>{description}</p>
            <p>Temperature: {temp}°C</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind Speed: {speed} m/s</p>
        </div>
        </>
        );
    };

export default WeatherCard;
// This component is responsible for displaying the weather information in a card format.
import React, { useState, useEffect ,useContext} from 'react';
import { SearchContext } from '../../searchProvider';
import './hourForcast.css';

export default function HourlyForecast() {
    const [forecast, setForecast] = useState([]);
    const { searchTerm } = useContext(SearchContext);
    
    
    
    useEffect(() => {
        async function GetWeather() {
            try {
               
                let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=299c326581043e25eba383c999044e1f&units=metric`);
                let data = await response.json();
                const now = new Date();
                
                
                const first6Hours = data.list.filter(item => {
                    const forecastTime = new Date(item.dt * 1000);
                    return forecastTime > now 
                }).slice(0, 4);

                setForecast(first6Hours); 
            } catch (err) {
                console.log("Error fetching weather data:", err);
            }
        }
        GetWeather();
    }, [searchTerm]);
    
    return (
        <div className='hle'>
            <h1 id='title'>Hourly Forecast</h1>
            {forecast.length > 0 ? (
                forecast.map((item, index) => (
                    <div className='horre' key={index}>
                        <p><strong>{new Date(item.dt * 1000).toLocaleTimeString([],{ hour: '2-digit', hour12: true })}</strong></p>
                        <p>{item.main.temp} °C</p>
                        <p>{item.weather[0].description}</p>
                        
                        
                    </div>
                ))
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
}

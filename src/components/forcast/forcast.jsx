import React ,{useEffect,useState,useContext} from "react";
import { SearchContext } from '../../searchProvider';
import './forcast.css';

export default function Forcast() { 
    let [forecast,setForecast]=useState({});
    const { searchTerm } = useContext(SearchContext);
    useEffect(() => {
        async function GetForecast() {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=299c326581043e25eba383c999044e1f&units=metric`);
            let data = await response.json();
            const dailyForecast = {}; 

       
            data.list.forEach(item => {
                
                const date = new Date(item.dt * 1000);
                const day = date.toLocaleDateString(); 

                
                if (!dailyForecast[day]) {
                    dailyForecast[day] = {
                        temp: [],
                        weather: item.weather[0].description,
                        date: day
                    };
                }
                
                dailyForecast[day].temp.push(item.main.temp);
            });

            
            const averagedForecasts = Object.values(dailyForecast).map(forecast => {
                const avgTemp = forecast.temp.reduce((acc, curr) => acc + curr, 0) / forecast.temp.length;
                return {
                    date: forecast.date,
                    avgTemp: avgTemp.toFixed(2), 
                    weather: forecast.weather
                };
            });
            setForecast(averagedForecasts);
        
        } catch (err) { 
            console.log(err);
        }

    }
    GetForecast();
    }, [searchTerm]);

    return (
        <div>
            
            <ul className="fle">
                {forecast.length>0 ? forecast.map((item,index)=>(
                    <li className="fore" key={index}><h6>{item.date}</h6>  <h6>{item.avgTemp}°C</h6>  <h6>{item.weather}</h6> </li>
                )) : <li className="fore">Loading...</li>}
            </ul>

        </div>
    );
}
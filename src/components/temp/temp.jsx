import React,{useEffect,useState,useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWind,faTint  } from '@fortawesome/free-solid-svg-icons';
import { SearchContext } from '../../searchProvider';
import './temp.css';

export default function Temp({variant}) {
    let [temp,setTemp]=useState(null);
    let [description,setDescription]=useState('');
    let [windSpeed,setWindSpeed]=useState(null);
    let [humidity,setHumidity]=useState(null);
    const { searchTerm } = useContext(SearchContext);
    
    useEffect(() => {
        async function GetTemp() {
        try {
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=299c326581043e25eba383c999044e1f&units=metric`);
            let data = await response.json();
            setDescription(data.weather[0].description);
            console.log(searchTerm);
            setTemp( data.main.temp);
            setWindSpeed(data.wind.speed);
            setHumidity(data.main.humidity);
        } catch (err) {
            console.log(err);
            console.log(searchTerm);
            
        }
        
    }
    GetTemp();
    }, [searchTerm]);
    const tempClass = variant === 'primary' ? 'temp-primary' : 'temp-secondary';
    const hiclass = variant === 'primary' ? 'hi-primary' : 'hi-secondary';
    return (
        <div >
            {temp!==null ? <h2 className={tempClass}>{temp}°</h2> : <h2>Loading...</h2>}
            {description!==""?<h4 className="des">{description}</h4>:""}
            <div className={hiclass}>
                <h3>
                    <FontAwesomeIcon className="Font" icon={faWind} />{windSpeed} m/s
                
                </h3>
                <h3>
                    <FontAwesomeIcon className="Font" icon={faTint} />{humidity}%
                </h3>
            </div>
            
        </div>
    );
}
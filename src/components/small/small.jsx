import React,{useEffect,useState} from "react";
import Temp from "../temp/temp.jsx";
import Forecast from "../hourForcast/hourForcast.jsx";
import './small.css';


export default function SmallSide() {
    return (
    <div className="small">
        <Timeing />
        <Morning />
        <Temp variant="temp-secondary" />
        <Forecast />
    </div>
        
    
        

    );
}

function Timeing(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();

    return  <h3 className="time">{hours>12?`${hours-12}:${minutes} PM`:`${hours}:${minutes} AM`}</h3>;
}
function Morning(){
    let date=new Date();
    let hours=date.getHours();
    return <h3 className="time">{hours<12?"Good Morning":"Good Night"}</h3>;
}
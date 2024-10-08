import './big.css'; 
import React from 'react';
import Forecast from '../forcast/forcast.jsx';
import Temp from '../temp/temp.jsx';
import Search from '../search/serch.jsx';

export default function BigSide() {
    
    
   



    return (
        <div className='big'>
            <h1 id='bigg'><FormattedDate /></h1>
            <Search />
            <Temp variant="primary"/> 
            <Forecast />           
        </div>
    );
}


function FormattedDate(){
    let date=new Date();
    let year=date.getFullYear();
    let month=date.getMonth()+1;
    let day=date.getDate();
    return `${day}.${month}.${year}`;
}



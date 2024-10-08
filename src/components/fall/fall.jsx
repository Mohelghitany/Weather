import BigSide from '../big/big.jsx';
import SmallSide from '../small/small.jsx';
import React from 'react';
import './fall.css';

export default function Fall() {
    return (
        
            <div className="row">
                <div className="col-md-9">
                    <BigSide />
                </div>
                <div className="col-md-3">
                    <SmallSide />
                </div>
            </div>
       
    );
}
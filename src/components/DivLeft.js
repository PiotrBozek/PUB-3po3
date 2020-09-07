import './DivLeft.css';
import React from 'react';

export default () => {
    return (
        <div className='div-left'>
            <p className='nr-phone'><img className='icon' src='../pics/IconPhone.png' alt='ikona telefonu'/>
                -> 887 333 030</p>
            <p className='adress' >Żagań, ul. Dworcowa 31</p>
        </div>
    )
}
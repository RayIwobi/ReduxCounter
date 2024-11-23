import React from 'react';
import './CounterApp.css';
import superhero from './assets/superhero.png';


function CounterNav() {
  return (
    <div className='counternav'>
        <div className='container'>
            <div className='left'>
                <img src={superhero} alt='superhero' className='imglogo'/>
                <h1>A Counter App with Redux Toolkit</h1>
            </div>
            <div className='right'>
                <h3>Designed by Raymond</h3>
                <h5>techlodas@gmail.com</h5>
            </div>
        </div>
    </div>
  )
}

export default CounterNav

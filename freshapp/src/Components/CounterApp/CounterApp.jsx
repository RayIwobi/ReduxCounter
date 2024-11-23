import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, 
    decrement, 
    incrementByAmount, 
    decrementByAmount, 
    resetCount } from '../reduxStore/CounterSlice';


function CounterApp() {
    const {count} = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    const [rcount, setRcount] = useState('');

    const handleChange = (e) => {
        setRcount(e.target.value)
    }

    const setcount = () => {//resets the input field and the timer
        dispatch(resetCount());
        setRcount('');
    }

  return (
    <>
    <div className='mainsection'>
        <div className='uppersection'>
        <div className='titlesection'>
        <h1>A Counter App with Redux Toolkit</h1>
        <p>A simple Counter application to demonstrate a seamless integration of react with redux</p>
        </div>

        <div className='counter'>
        <h3>Counter: <span>{count}</span></h3>
        
        </div>

        <div className='doublebutton'>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        </div>

        <input type='number'  //accepts imput from user
        value={rcount} 
        onChange={handleChange} 
        placeholder='Enter a number'
        className='inputarea'
        />
        </div>
        

        <div className='buttonsection'>
           {/* The buttons section */}
           
           <button onClick={() => dispatch(incrementByAmount(Number(rcount)))}>increase by Amount</button>
           <button onClick={() => dispatch(decrementByAmount(Number(rcount)))}>decrease by Amount</button>
           <button onClick={() => dispatch(setcount)}>reset</button>


        </div>

      
    </div>
    </>
  )
}

export default CounterApp

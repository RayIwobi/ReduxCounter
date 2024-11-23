import { createSlice } from '@reduxjs/toolkit';


const CounterSlice = createSlice({
    name: 'counter',
    initialState:{
        count:0
    },
    reducers:{
        increment: (state) => {
            state.count += 1;
        },

        decrement: (state) => {
            state.count -= 1;
        },

        incrementByAmount: (state, action) => {
            state.count += action.payload;
        },

        decrementByAmount: (state, action) => {
            state.count -= action.payload;
        },

        resetCount: (state) => {
            state.count = 0
        }
    }
})

export const {increment, 
    decrement, 
    incrementByAmount, 
    decrementByAmount, 
    resetCount} = CounterSlice.actions;

export default CounterSlice.reducer;
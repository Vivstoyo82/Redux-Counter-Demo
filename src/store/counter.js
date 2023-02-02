import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter', // you can give any name not necessarily counter as above
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
});

// here below we are dispatching the createSlice through actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
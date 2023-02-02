// import { createStore } from 'redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'

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

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
})

// const store = createStore(counterSlice.reducer);
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth : authSlice.reducer
    }
}); //ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.

// here below we are dispatching the createSlice through actions
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// We can write configureStore like this also below
// const store = configureStore({
//     reducer : {counter : counterSlice.reducer}
// }); 
// if we had multiple state slices in a bigger application something we're going to see later, then alternatively 
// as a value for this reducer key, we could also set an object and in that object, we can set up any keys of our choice,
// so any property names of our choice and the values of those properties would then be different reducer functions.

export default store;
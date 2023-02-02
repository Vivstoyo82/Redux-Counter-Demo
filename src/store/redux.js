// import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth';

// const store = createStore(counterSlice.reducer);
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth : authReducer
    }
}); //ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.



// We can write configureStore like this also below
// const store = configureStore({
//     reducer : {counter : counterSlice.reducer}
// }); 
// if we had multiple state slices in a bigger application something we're going to see later, then alternatively 
// as a value for this reducer key, we could also set an object and in that object, we can set up any keys of our choice,
// so any property names of our choice and the values of those properties would then be different reducer functions.

export default store;
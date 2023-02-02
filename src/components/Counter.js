import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store/redux';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter)
  const show = useSelector((state) => state.counter.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5)); // { type : SOME_UNIQUE-IDENTIFIER, payload : 10 } this is done by redux in background
  }; 

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())  
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}> COUNTER VALUE = {counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>{show ? 'Hide Counter' : 'Show Counter'}</button>
    </main>
  );
};

export default Counter;

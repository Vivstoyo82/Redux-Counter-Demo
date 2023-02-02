import { useSelector, useDispatch }from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter)
  const show = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', value : 5 }); // whatever we add here name is up to you let's value here so same should be there in the redux
  }; // here we are attaching an action payloads to redux

  const toggleCounterHandler = () => {
    dispatch({ type : 'toggle' })
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
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

import { useSelector, useDispatch } from 'react-redux';
import * as timerActions from '../../redux/timer/timerActions';

const Timer = () => {
  const value = useSelector(state => state.timer);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          dispatch(timerActions.increment(1));
        }}
      >
        +
      </button>
      <p>{value} minutes</p>
      <button
        type="button"
        onClick={() => {
          dispatch(timerActions.decrement(1));
        }}
      >
        -
      </button>
    </div>
  );
};

export default Timer;

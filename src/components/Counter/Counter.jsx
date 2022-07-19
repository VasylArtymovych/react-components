import { connect } from 'react-redux';
import Controls from './Controls';
import * as actions from '../../redux/Counter/counter-actions';

const Counter = ({ value, step, onIncrement, onDecrement }) => {
  return (
    <>
      <div>{value}</div>
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </>
  );
};

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  onIncrement: value => dispatch(actions.increment(value)),
  onDecrement: value => dispatch(actions.decrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//oldschool:
//connect(mapStateToProps, mapDispatchToProps, mergeProps, options);

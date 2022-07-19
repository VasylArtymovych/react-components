const Controls = ({ step, onIncrement, onDecrement }) => (
  <div>
    <button type="button" onClick={onIncrement}>
      more on {step}
    </button>
    <button type="button" onClick={onDecrement}>
      less on {step}
    </button>
  </div>
);

export default Controls;

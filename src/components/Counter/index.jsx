import { connect } from 'react-redux';
import * as actionCreators from '../../actions';

function Counter(props) {
  const { 
    count, 
    step, 
    incrementAction, 
    decrementAction, 
    setStepAction 
  } = props;

  const changeStep = ({ target: { value } }) => {
    setStepAction(Number(value));
  };

  return (
    <div>
      <h1>Counter is: {count}</h1>
      <input value={step} onChange={changeStep} />
      <button onClick={decrementAction}>Отнять</button>
      <button onClick={incrementAction}>Добавить</button>
    </div>
  );
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    incrementAction: () => dispatch(actionCreators.increment()),
    decrementAction: () => dispatch(actionCreators.decrement()),
    setStepAction: (newStep) => dispatch(actionCreators.setStep(newStep)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

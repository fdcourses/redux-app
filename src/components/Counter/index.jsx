import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../actions/counterCreators';
import { bindActionCreators } from 'redux';

function Counter(props) {
  const { step, count } = useSelector(({counter}) => counter);

  const dispatch = useDispatch();

  const { increment, decrement, setStep } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const changeStep = ({ target: { value } }) => {
    setStep(Number(value));
  };

  return (
    <div>
      <h1>Counter is: {count}</h1>
      <input value={step} onChange={changeStep} />
      <button onClick={decrement}>Отнять</button>
      <button onClick={increment}>Добавить</button>
    </div>
  );
}

export default Counter;

import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  const { count, step, dispatch } = props;

  const increment = () => {
    const action = {
      type: 'increment',
    };

    dispatch(action);
  };

  const decrement = () => {
    const action = {
      type: 'decrement',
    };

    dispatch(action);
  };

  const changeStep = (event) => {
    const action = {
      type: 'setStep',
      newStep : Number(event.target.value)
    }

    dispatch(action);
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

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(App);

// const withProps = connect(mapStateToProps);
// const AppWithProps = withProps(App);
// export default AppWithProps;

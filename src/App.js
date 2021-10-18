import { connect } from 'react-redux';

function App(props) {
  console.log(props);
  const {count, dispatch} = props;

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

  return (
    <div>
      <h1>Counter is: {count}</h1>
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

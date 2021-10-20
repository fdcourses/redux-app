import React from 'react';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

const App = () => {
  return (
    <div>
      <Counter />
      <TaskForm />
      <TaskList />

      <UserForm />
      <UserList/>
    </div>
  );
}

export default App;


// const withProps = connect(mapStateToProps);
// const AppWithProps = withProps(App);
// export default AppWithProps;

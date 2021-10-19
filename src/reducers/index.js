import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,
  tasks: [
    {
      id: 0,
      text: 'test task',
      isDone: false,
    },
  ],
};

let serial = 1;

function reducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT: {
      const newState = {
        ...state,
        count: state.count + state.step,
      };

      return newState;
    }
    case ACTION_TYPES.DECREMENT: {
      const newState = {
        ...state,
        count: state.count - state.step,
      };

      return newState;
    }
    case ACTION_TYPES.SET_STEP: {
      const newState = {
        ...state,
        step: action.newStep,
      };

      return newState;
    }

    case ACTION_TYPES.CREATE_TASK: {
      const { tasks } = state;
      const { values: task } = action;
      const newTasks = [...tasks, { ...task, id: serial++ }];

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case ACTION_TYPES.DELETE_TASK: {
      const { tasks } = state;
      const { id } = action;

      const newTasks = tasks.filter((task) => task.id !== id);

      return {
        ...state,
        tasks: newTasks,
      };
    }

    case ACTION_TYPES.UPDATE_TASK: {
      const { tasks } = state;
      const { id, values } = action;

      const newTasks = [...tasks];

      const taskIndex = newTasks.findIndex((task) => task.id === id);
      const task = newTasks[taskIndex];
      newTasks[taskIndex] = { ...task, ...values };

      return {
        ...state,
        tasks: newTasks,
      };
    }

    default:
      return state;
  }
}

export default reducer;

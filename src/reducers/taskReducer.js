import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  tasks: [
    {
      id: 0,
      text: 'test task',
      isDone: false,
    },
  ],
};

let serial = 1;

function taskReducer(state = initialState, action) {
  switch (action.type) {
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

export default taskReducer;

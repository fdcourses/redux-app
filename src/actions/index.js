import ACTION_TYPES from './actionTypes';

export const increment = () => {
  return {
    type: ACTION_TYPES.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: ACTION_TYPES.DECREMENT,
  };
};

export const setStep = (data) => {
  return {
    type: ACTION_TYPES.SET_STEP,
    newStep: data,
  };
};

export const createTask = (values) => {
  return {
    type: ACTION_TYPES.CREATE_TASK,
    values
  }
}

export const updateTask = ({id,values}) => {
  return {
    type: ACTION_TYPES.UPDATE_TASK,
    values,
    id
  }
}

export const deleteTask = (id) => {
  return {
    type: ACTION_TYPES.DELETE_TASK,
    id
  }
}
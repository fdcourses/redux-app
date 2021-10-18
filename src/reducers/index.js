import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0,
  step: 1,
};

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

    default:
      return state;
  }
}

export default reducer;

import ACTION_TYPES from './actionTypes';

export function createUserRequest(userData = {}) {
  const action = {
    type: ACTION_TYPES.CREATE_USER_REQUEST,
    userData
  }

  return action;
}

export const creatUserSuccess = (values) => {
  return {
    type: ACTION_TYPES.CREATE_USER_SUCCESS,
    values
  }
}

export const creatUserError = (error) => {
  return {
    type: ACTION_TYPES.CREATE_USER_ERROR,
    error
  }
}
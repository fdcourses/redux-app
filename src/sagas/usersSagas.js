
import { put } from '@redux-saga/core/effects';
import * as UserActionCreators from '../actions/userCreators';
import * as API from '../api';

export function* createUserSaga(action) {
  try {
    const response = yield API.createUser(action.userData);
    const {data: {
      data: user
    }} =response;

    yield put(UserActionCreators.creatUserSuccess(user));

  } catch(err) {
    yield put(UserActionCreators.creatUserError(err));
  }
}


export function * getUserSaga (action) {
  try {

  } catch(err) {

  }
}

export function * deleteUserSaga(action) {
  try {

  } catch(err) {
    
  }
}
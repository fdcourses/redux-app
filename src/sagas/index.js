import { takeLatest } from 'redux-saga/effects';
import ACTION_TYPES from '../actions/actionTypes';
import { createUserSaga, getUserSaga, deleteUserSaga } from './usersSagas';

function* rootSaga() {
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_REQUEST, getUserSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_REQUEST, deleteUserSaga);
}

export default rootSaga;

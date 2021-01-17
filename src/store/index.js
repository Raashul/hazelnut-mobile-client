import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import auth from './auth';
import bucket from './bucket';

const reducer = combineReducers({
	auth,
	bucket
});
const store = configureStore({
	reducer
});
export default store;

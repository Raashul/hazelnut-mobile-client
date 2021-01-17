import { AsyncStorage } from 'react-native';

import { createSlice } from '@reduxjs/toolkit';
import * as api from '../api';
// Slice
const slice = createSlice({
	name: 'auth',
	initialState: {
		isLoggedIn: false
	},
	reducers: {
		loginSuccess: (state, action) => {
			const { type, payload } = action;
			AsyncStorage.setItem('jwt', action.payload.token);
			state.isLoggedIn = true;
		},
		logoutSuccess: (state, action) => {
			state.isLoggedIn = false;
		}
	}
});
export default slice.reducer;

// Actions
const { loginSuccess, logoutSuccess } = slice.actions;

// export const login = ({ username, password }) => async (dispatch) => {
// 	try {
// 		dispatch(loginSuccess({ username }));
// 	} catch (e) {
// 		return console.error(e.message);
// 	}
// };
// export const logout = () => async (dispatch) => {
// 	try {
// 		// const res = await api.post('/api/auth/logout/')
// 		return dispatch(logoutSuccess());
// 	} catch (e) {
// 		return console.error(e.message);
// 	}
// };

export const login = (payload) => {
	return async (dispatch) => {
		const payload = {
			email: 'rashul1996@gmail.com',
			password: 'test'
		};
		try {
			const response = await api.localLogin(payload);
			console.log('res', response.data);
			dispatch(loginSuccess(response.data));
		} catch (error) {
			console.log('err', error);
			// dispatch(getRecipesFailure());
		}
	};
};

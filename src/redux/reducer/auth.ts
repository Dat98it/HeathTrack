import {User} from '@lib/types';
import {createSlice} from '@reduxjs/toolkit';

export interface initialState {
  token: string;
  user: User | null;
}

const initialState: initialState = {
  token: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    auth: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    updateUser: (state, action) => {
      state.user = {...state.user, ...action.payload};
    },
  },
});

export const {auth, updateUser} = authSlice.actions;

export const authSelector = (state: {auth: initialState}) => state.auth.token;
export const userSelector = (state: {auth: initialState}) => state.auth.user;

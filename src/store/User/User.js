import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isAuthLoading: false,
    role: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.role = action.payload.role;
        },
        logout: (state) => {
            state.user = null;
            state.role = null;
        },
    }
});

export const { login,logout } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const stateUser = state => state.user;
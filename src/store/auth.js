import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

// here below we are dispatching the createSlice through actions
export const authActions = authSlice.actions;

export default authSlice.reducer;
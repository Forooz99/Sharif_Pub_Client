import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { value: { username: "" } };
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.value = initialState.value;
        }
    }
});

export const { logout } = userSlice.actions;

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
    },
});

// Add a subscription to the store to handle redirect after logout
store.subscribe(() => {
    const state = store.getState();
    if (!state.user.value.username) {
        // User is logged out, redirect to "/login"
        window.location.href = "/login";
    }
});

import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "@/store/userSlice";

export const store = configureStore({
    reducer: {
        userData: userReducer,
    },
});

export type State = typeof store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;

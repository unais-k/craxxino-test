import { userReducer } from "@/store/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = { key: "root", storage, version: 1 };
const nonSerializableActionTypes = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const userLoginPersistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
    reducer: {
        userData: userLoginPersistedReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: nonSerializableActionTypes,
                ignoredActionPaths: ["payload.timestamp"],
            },
        }),
});

export type State = typeof store;

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;

export const persistor = persistStore(store);

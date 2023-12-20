import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RegisteredUserInterface } from "@/types/user";
import { RootState } from "./store";

const initialState: { user: RegisteredUserInterface } = {
    user: {
        name: "",
        email: "",
        phone: "",
        token: "",
        password: "",
        _id: "",
        __v: 0,
        dob: "",
        address: "",
        livedAtAddress: "",
        gender: "",
        employmentStatus: "",
        savingOrInvestment: "",
        hobbies: "",
    },
};

const userSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<RegisteredUserInterface>) {
            state.user = { ...state.user, ...action.payload };
        },
        clearUser(state) {
            state.user = initialState.user;
        },
    },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.userData.user;

export const userReducer = userSlice.reducer;

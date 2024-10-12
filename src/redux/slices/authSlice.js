import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { authAPI } from "../../api/samuraiAPI";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const authSlice = createSliceWithThunks({
    name: "auth",
    initialState: {
        userId: null,
        email: null,
        login: null,
        isAuth: false,
        status: null,
    },

    selectors: {
        selectIsAuth: (state) => state.isAuth,
    },

    reducers: (create) => ({
        getAuthMe: create.asyncThunk(
            async () => {
                const response = await authAPI.getAuthMe();
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    if (action.payload.id) {
                        state.userId = action.payload.id;
                        state.login = action.payload.login;
                        state.email = action.payload.email;
                        state.isAuth = true;
                    } else {
                        state.userId = null;
                        state.login = null;
                        state.email = null;
                        state.isAuth = false;
                    }
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        getLoginMe: create.asyncThunk(
            async (authData) => {
                const response = await authAPI.loginMe(
                    authData.email,
                    authData.password,
                    authData.rememberMe
                );
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    if (action.payload.resultCode === 0) {
                        state.userId = action.payload.data.userId;
                        state.isAuth = true;
                    } else {
                        state.error = action.payload.messages;
                    }
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        getLogoutMe: create.asyncThunk(
            async () => {
                const response = await authAPI.logoutMe();
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    if (action.payload.resultCode === 0) {
                        state.userId = null;
                        state.login = null;
                        state.email = null;
                        state.isAuth = false;
                    }
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
    }),
});

export const { getAuthMe, getLoginMe, getLogoutMe } = authSlice.actions;

export const { selectIsAuth } = authSlice.selectors;

export default authSlice.reducer;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dialogsReducer from "./slices/dialogsSlice.ts";
import profileReducer from "./slices/profileSlice.ts";
import sideBarReducer from "./slices/sidebarSlice.ts";
import usersReducer from "./slices/usersSlice.ts";
import authReducer from "./slices/authSlice.ts";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersList: usersReducer,
    auth: authReducer,
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default setupStore;

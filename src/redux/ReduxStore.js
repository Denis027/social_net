import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./slices/authSlice";

const rootReducer = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    });
};

export default setupStore;

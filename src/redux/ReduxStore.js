import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk } from "redux-thunk";

const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(redusers, applyMiddleware(thunk));

// const store = configureStore({ redusers });

export default store;

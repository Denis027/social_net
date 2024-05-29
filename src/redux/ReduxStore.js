import {
    applyMiddleware,
    combineReducers,
    legacy_createStore as createStore,
} from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import { thunk as thunkMiddleWare } from "redux-thunk";

const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleWare));

export default store;

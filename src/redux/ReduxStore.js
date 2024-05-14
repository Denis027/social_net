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
import { reducer as formReducer } from 'redux-form'

const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

const store = createStore(redusers, applyMiddleware(thunkMiddleWare));

export default store;

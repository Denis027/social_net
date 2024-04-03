import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import sideBarReducer from "./SidebarReducer";
import usersReducer from "./UsersReducer";

const redusers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
});

const store = createStore(redusers);

export default store;

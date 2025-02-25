import {
    configureStore,
    combineReducers,
    ThunkAction,
    UnknownAction,
} from "@reduxjs/toolkit";
import dialogsReducer from "./slices/dialogsSlice";
import profileReducer from "./slices/profileSlice";
import sideBarReducer from "./slices/sidebarSlice";
import usersReducer from "./slices/usersSlice";
import authReducer from "./slices/authSlice";
import { profileAPI } from "../../api/samuraiAPI";

const extraArgument = {
    profileAPI,
};

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
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: { extraArgument },
            }),
    });
};

export const store = setupStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunkType<R = void> = ThunkAction<
    R,
    RootState,
    typeof extraArgument,
    UnknownAction
>;

export default setupStore;

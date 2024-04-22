import { usersAPI } from "../api/usersAPI";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {
                ...state,
                ...action.data,
            };
            return stateCopy;
        default:
            return state;
    }
};

export const setAuthUserData = (data) => {
    return { type: SET_USER_DATA, data };
};

export const getAuthMe = () => (dispatch) => {
    usersAPI.getAuthMe().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    });
};

export default authReducer;

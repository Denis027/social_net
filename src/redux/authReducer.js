import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_DATA = "SET_LOGIN_DATA";

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    password: null,
    rememberMe: false,
};

const authReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case SET_USER_DATA:
            stateCopy = {
                ...state,
                ...action.data,
                isAuth: true,
            };
            return stateCopy;
        case SET_LOGIN_DATA:
            stateCopy = {
                ...state,
                ...action.data,
                isAuth: true,
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
    authAPI.getAuthMe().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(data.data));
        }
    });
};

export const getLoginMe = (authData) => (dispatch) => {
    debugger
    authAPI.getLoginMe(authData).then((data) => {
        if (data.resultCode === 0) {
            console.log(data)
        }
        console.log(data)
    });
};



export default authReducer;

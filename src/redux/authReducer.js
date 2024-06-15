import { authAPI } from "../api/authAPI";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
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
            console.log(data);
            dispatch(
                setAuthUserData(
                    data.data.id,
                    data.data.login,
                    data.data.email,
                    true
                )
            );
        }
    });
};

export const getLoginMe = (authData) => (dispatch) => {
    authAPI.loginMe(authData).then((response) => {
        if (response.data.resultCode === 0) {
            console.log(response);
            dispatch(getAuthMe());
        }
    });
};

export const getLogoutMe = () => {
    return (dispatch) => {
        authAPI.logoutMe().then((response) => {
            if (response.data.resultCode === 0) {
                console.log(response);
                dispatch(getAuthMe());
            }
        });
    };
};

export default authReducer;

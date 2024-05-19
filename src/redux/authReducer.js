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
            let { id, login, email } = data.data;
            dispatch(setAuthUserData(id, login, email, true));
        }
    });
};

export const getLoginMe = (authData) => {
    return (dispatch) => {
        authAPI.loginMe(authData.email, authData.password, authData.rememberMe);
        // .then((response) => {
        //     if (response.resultCode === 0) {
        //         dispatch(getAuthMe());
        //     }
        // });
    };
};

// export const getLoginMe = (authData) => {
//     debugger;
//     authAPI.loginMe(authData.email, authData.password, authData.rememberMe);
// };

export const getLogoutMe = () => {
    return (dispatch) => {
        authAPI.logoutMe().then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthUserData());
            }
        });
    };
};

export default authReducer;

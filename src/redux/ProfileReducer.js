import { profileAPI } from "../api/usersAPI";

const UPDATE_POST_TEXT = "UPDATE-POST-TEXT";
const ADD_NEW_POST = "ADD-NEW-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_PROFILE_STATUS = "SET_PROFILE_STATUS";

let initialState = {
    newPostText: "kek",
    Posts: [
        {
            id: 1,
            name: "Ivan",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
        {
            id: 2,
            name: "Andry",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",

            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
        {
            id: 3,
            name: "Alex",
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            message:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
            likecount: 123,
        },
    ],
    profile: null,
    profileStatus: "Hello World",
};

const profileReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case UPDATE_POST_TEXT: {
            stateCopy = {
                ...state,
                newPostText: action.newText,
            };
            return stateCopy;
        }
        case ADD_NEW_POST: {
            let newPost = {
                name: "Alex",
                ava_alt: "ava",
                ava_src:
                    "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                message: stateCopy.newPostText,
                likecount: 123,
            };
            stateCopy = {
                ...state,
                Posts: [...state.Posts],
            };
            stateCopy.Posts.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case SET_USER_PROFILE: {
            stateCopy = {
                ...state,
                profile: {
                    ...action.profile,
                },
            };
            return stateCopy;
        }
        case SET_PROFILE_STATUS: {
            stateCopy = {
                ...state,
                profileStatus: action.profileStatus,
            };
            return stateCopy;
        }
        default:
            return state;
    }
};

export const onPostChange = (newText) => {
    return { type: UPDATE_POST_TEXT, newText };
};
export const addNewPost = () => {
    return { type: ADD_NEW_POST };
};
export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile };
};

export const setProfileStatus = (profileStatus) => {
    return { type: SET_PROFILE_STATUS, profileStatus };
};

export const getProfileStatus =
    (userId = 30973) =>
    (dispatch) => {
        profileAPI.getProfileStatus(userId).then((data) => {
            dispatch(setProfileStatus(data));
            // dispatch(setUsersCount(data.totalCount));
        });
    };

export const editProfileStatus = (profileStatus) => (dispatch) => {
    profileAPI.setProfileStatus(profileStatus).then((data) => {
        dispatch(setProfileStatus(data));
        // dispatch(setUsersCount(data.totalCount));
    });
};

export const getUserProfile =
    (userId = 30973) =>
    (dispatch) => {
        profileAPI.getUserProfilePage(userId).then((data) => {
            dispatch(setUserProfile(data));
            // dispatch(setUsersCount(data.totalCount));
        });
    };

export default profileReducer;

// import axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

let initialState = {
    users: [
        {
            id: 1,
            name: "Ivan",
            followed: false,
            location: { city: "Moscow", country: "Russian" },
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
        },
        {
            id: 2,
            name: "Andry",
            followed: true,
            location: { city: "Moscow", country: "Russian" },
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
        },
        {
            id: 3,
            name: "Alex",
            followed: false,
            location: { city: "Moscow", country: "Russian" },
            ava_alt: "ava",
            ava_src:
                "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
            status: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
        },
    ],
    usersList: {
        pages: [],
        pageSize: 10,
        totalUsersCount: 154,
        currentPage: 1,
    },
};

const usersReducer = (state = initialState, action) => {
    let stateCopy = { ...state };
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true };
                    }
                    return u;
                }),
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false };
                    }
                    return u;
                }),
            };
        case SET_USERS:
            stateCopy = { ...state, users: [...action.users] };
            return stateCopy;
        case SET_USERS_COUNT:
            stateCopy = {
                ...state,
                usersList: {
                    ...state.usersList,
                    totalUsersCount: action.totalUsersCount,
                },
            };
            return stateCopy;
        case SET_CURRENT_PAGE:
            stateCopy = {
                ...state,
                usersList: {
                    ...state.usersList,
                    currentPage: action.currentPage,
                },
            };
            return stateCopy;
        default:
            return state;
    }
};

export const FollowAC = (userId) => {
    return { type: FOLLOW, userId };
};
export const UnfollowAC = (userId) => {
    return { type: UNFOLLOW, userId };
};
export const setUsersAC = (users) => {
    return { type: SET_USERS, users };
};
export const setUsersCountAC = (totalUsersCount) => {
    return { type: SET_USERS_COUNT, totalUsersCount };
};
export const setCurrentPageAC = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage };
};

export default usersReducer;

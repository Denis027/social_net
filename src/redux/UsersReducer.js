// import axios from "axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const GET_PAGES = "GET_PAGES";

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
    pages: [],
    pageSize: 10,
    totalUsersCount: 54,
    currentPage: 1,
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
            stateCopy = { ...state, totalUsersCount: action.totalUsersCount };
            return stateCopy;
        case SET_CURRENT_PAGE:
            stateCopy = { ...state, currentPage: action.currentPage };
            return stateCopy;
        case GET_PAGES:
            let pagesNew = [];
            let totalPagesCount = Math.ceil(
                state.totalUsersCount / state.pageSize
            );
            for (let i = 1; i <= totalPagesCount; i++) {
                pagesNew.push(i);
            }
            stateCopy = { ...state, pages: [...pagesNew] };
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
export const getPagesAC = () => {
    return { type: GET_PAGES };
};

export default usersReducer;

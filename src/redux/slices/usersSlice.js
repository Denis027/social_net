import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../api/samuraiAPI";
// eslint-disable-next-line

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const usersSlice = createSliceWithThunks({
    name: "usersPage",
    initialState: {
        usersList: {
            users: [],
            totalUsersCount: 154,
            currentPage: 1,
            isFetching: false,
        },
    },

    selectors: {
        selectUsersList: (state) => state.usersList,
    },

    reducers: (create) => ({
        getUsers: create.asyncThunk(
            async (currentPage, pageSize) => {
                return await usersAPI.getUsers(currentPage, pageSize);
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.usersList.users = action.payload.items;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        userFollow: create.asyncThunk(
            async (usersId) => {
                return usersAPI.userFollow(usersId);
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.usersList.users.map((user) => {
                        if (user.id === action.meta.arg) {
                            return (user.followed = true);
                        }
                        return user;
                    });
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        userUnfollow: create.asyncThunk(
            async (usersId) => {
                return usersAPI.userUnfollow(usersId);
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.usersList.users.map((user) => {
                        if (user.id === action.meta.arg) {
                            return (user.followed = false);
                        }
                        return user;
                    });
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        onStatusChange: create.reducer((state, action) => {
            return (state.profileData.newStatusText = action.payload);
        }),
    }),
});

export const { getUsers, userFollow, userUnfollow } = usersSlice.actions;

export const { selectUsersList } = usersSlice.selectors;

export default usersSlice.reducer;

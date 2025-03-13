import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../../api/samuraiAPI";
import { UsersRequestType, UserType } from "../../types/types";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export type UsersListType = {
    usersList: {
        users: Array<UserType>;
        totalUsersCount: Number;
        isFetching: boolean;
        status: String | null;
        error: String | null;
    };
};

const initialState: UsersListType = {
    usersList: {
        users: [],
        totalUsersCount: 154,
        isFetching: false,
        status: null,
        error: null,
    },
};

export const usersSlice = createSliceWithThunks({
    name: "usersList",
    initialState,
    selectors: {
        selectUsersList: (state: UsersListType) => state.usersList,
    },

    reducers: (create) => ({
        getUsers: create.asyncThunk(
            async (currentPage: UsersRequestType) => {
                console.log(currentPage);
                return await usersAPI.getUsers(currentPage);
            },
            {
                pending: (state) => {
                    state.usersList.isFetching = true;
                    state.usersList.error = null;
                },
                fulfilled: (state, action) => {
                    state.usersList.isFetching = false;
                    state.usersList.totalUsersCount = action.payload.totalCount;
                    state.usersList.users = action.payload.items;
                    // console.log(action.payload.items);
                },
                rejected: (state: UsersListType, action: any) => {
                    state.usersList.status = "error";
                    state.usersList.error = action.error;
                },
            }
        ),
        userFollow: create.asyncThunk(
            async (usersId) => {
                return await usersAPI.userFollow(usersId);
            },
            {
                pending: (state) => {
                    state.usersList.status = "Loading";
                    state.usersList.error = null;
                },
                fulfilled: (state, action: any) => {
                    state.usersList.status = "Resolved";
                    state.usersList.users.map((user) => {
                        if (user.id === action.meta.arg) {
                            return (user.followed = true);
                        }
                        return user;
                    });
                },
                rejected: (state, action: any) => {
                    state.usersList.status = "error";
                    state.usersList.error = action.error;
                },
            }
        ),
        userUnfollow: create.asyncThunk(
            async (usersId: number) => {
                return await usersAPI.userUnfollow(usersId);
            },
            {
                pending: (state: UsersListType) => {
                    state.usersList.status = "Loading";
                    state.usersList.error = null;
                },
                fulfilled: (state, action: any) => {
                    state.usersList.status = "Resolved";
                    state.usersList.users.map((user) => {
                        if (user.id === action.meta.arg) {
                            console.log(action);

                            return (user.followed = false);
                        }
                        return user;
                    });
                },
                rejected: (state: UsersListType, action: any) => {
                    state.usersList.status = "error";
                    state.usersList.error = action.error;
                },
            }
        ),
    }),
});

export const { getUsers, userFollow, userUnfollow } = usersSlice.actions;

export const { selectUsersList } = usersSlice.selectors;

export default usersSlice.reducer;

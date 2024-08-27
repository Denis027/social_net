import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/samuraiAPI";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const profileSlice = createSliceWithThunks({
    name: "profilePage",
    initialState: {
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
    },

    selectors: {
        selectProfile: (state) => state.profile,
        selectProfileStatus: (state) => state.profileStatus,
        selectPosts: (state) => state.Posts,
        selectNewPostText: (state) => state.newPostText,
    },

    reducers: (create) => ({
        addNewPost: create.reducer((state) => {
            let newPost = {
                name: "Alex",
                ava_alt: "ava",
                ava_src:
                    "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                message: state.newPostText,
                likecount: 0,
            };
            state.Posts.push(newPost);
            state.newPostText = "";
            return state;
        }),
        onPostChange: create.reducer((state, action) => {
            state.newPostText = action.payload;
            return state;
        }),
        getUserProfile: create.asyncThunk(
            async (userId) => {
                const response = await profileAPI.getUserProfilePage(
                    userId || 30973
                );
                return response;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.profile = action.payload;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        getProfileStatus: create.asyncThunk(
            async (userId) => {
                const response = await profileAPI.getProfileStatus(
                    userId || 30973
                );
                return response;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    state.profileStatus = action.payload;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        editProfileStatus: create.asyncThunk(
            async (profileStatus) => {
                const response = await profileAPI.setProfileStatus(
                    profileStatus
                );
                console.log(response);
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
    }),
});

export const {
    getUserProfile,
    getProfileStatus,
    editProfileStatus,
    addNewPost,
    onPostChange,
} = profileSlice.actions;

export const {
    selectProfile,
    selectProfileStatus,
    selectPosts,
    selectNewPostText,
} = profileSlice.selectors;

export default profileSlice.reducer;

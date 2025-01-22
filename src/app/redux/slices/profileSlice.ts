import { PostType, UserProfileType } from "../../types/types";
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { profileAPI } from "../../../api/samuraiAPI";
// eslint-disable-next-line
import { myPhoto, userPhoto } from "../../Fish";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export type ProfileDataType = {
    profile: null | UserProfileType;
    profileStatus: null | string;
    newStatusText: null | string;
};

export type MyPostsDataType = {
    newPostText: string;
    Posts: Array<PostType>;
};

export type ProfilePageType = {
    profileData: ProfileDataType;
    myPostsData: MyPostsDataType;
    status: null | string;
    error: any;
};

const initialState: ProfilePageType = {
    profileData: {
        profile: null,
        profileStatus: null,
        newStatusText: null,
    },
    myPostsData: {
        newPostText: "kek",
        Posts: [
            {
                name: "Ivan",
                ava_alt: "ava",
                ava_src: userPhoto,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
                likecount: 123,
            },
            {
                name: "Andry",
                ava_alt: "ava",
                ava_src: userPhoto,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
                likecount: 123,
            },
            {
                name: "Alex",
                ava_alt: "ava",
                ava_src: userPhoto,
                message:
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda nesciunt ad, quis at id suscipit. Repellendus non voluptate, fugit obcaecati quisquam at vel vitae, magnam atque, ipsam amet eaque animi.",
                likecount: 123,
            },
        ],
    },
    status: null,
    error: null,
};

export const profileSlice = createSliceWithThunks({
    name: "profilePage",
    initialState,

    selectors: {
        selectProfileData: (state) => state.profileData,
        selectMyPostsData: (state) => state.myPostsData,
    },

    reducers: (create) => ({
        addNewPost: create.reducer((state) => {
            let newPost = {
                name: "Alex",
                ava_alt: "ava",
                ava_src: myPhoto,
                message: state.myPostsData.newPostText,
                likecount: 0,
            };
            state.myPostsData.Posts.push(newPost);
            state.myPostsData.newPostText = "";
        }),
        onPostChange: create.reducer((state, action: any) => {
            console.log(action);
            state.myPostsData.newPostText = action.payload;
        }),
        getUserProfile: create.asyncThunk(
            async (userId: number) => {
                return await profileAPI.getUserProfilePage(userId || 30973);
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action: any) => {
                    console.log(action);
                    state.status = "Resolved";
                    state.profileData.profile = action.payload;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        getProfileStatus: create.asyncThunk(
            async (userId: number) => {
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
                    state.profileData.profileStatus = action.payload;
                },
                rejected: (state, action) => {
                    state.status = "error";
                    state.error = action.error;
                },
            }
        ),
        onStatusChange: create.reducer((state, action: any) => {
            return (state.profileData.newStatusText = action.payload);
        }),
        editProfileStatus: create.asyncThunk(
            async (profileStatus) => {
                const response = await profileAPI.setProfileStatus(
                    profileStatus
                );
                return response.data;
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
                    state.status = "Resolved";
                    if (action.payload.resultCode === 0) {
                        state.profileData.profileStatus =
                            state.profileData.newStatusText;
                    }
                },
                rejected: (state, action: any) => {
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
    onStatusChange,
} = profileSlice.actions;

export const { selectProfileData, selectMyPostsData } = profileSlice.selectors;

export default profileSlice.reducer;

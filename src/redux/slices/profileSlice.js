import { asyncThunkCreator, buildCreateSlice, nanoid } from "@reduxjs/toolkit";
import { profileAPI } from "../../api/samuraiAPI";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export const profileSlice = createSliceWithThunks({
    name: "profilePage",
    initialState: {
        profileData: {
            profile: null,
            profileStatus: null,
            newStatusText: null,
        },
        myPostsData: {
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
        },
    },

    selectors: {
        selectProfileData: (state) => state.profileData,
        selectMyPostsData: (state) => state.myPostsData,
    },

    reducers: (create) => ({
        addNewPost: create.reducer((state) => {
            let newPost = {
                name: "Alex",
                ava_alt: "ava",
                ava_src:
                    "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-1024x682.jpg",
                message: state.newPostText,
                key: nanoid(),
                likecount: 0,
            };
            state.myPostsData.Posts.push(newPost);
            state.myPostsData.newPostText = "";
            return state;
        }),
        onPostChange: create.reducer((state, action) => {
            return (state.myPostsData.newPostText = action.payload);
        }),
        getUserProfile: create.asyncThunk(
            async (userId) => {
                return await profileAPI.getUserProfilePage(userId || 30973);
            },
            {
                pending: (state) => {
                    state.status = "Loading";
                    state.error = null;
                },
                fulfilled: (state, action) => {
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
                    state.profileData.profileStatus = action.payload;
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
                    console.log(action);
                    state.status = "Resolved";
                    if (action.payload.resultCode === 0) {
                        state.profileData.profileStatus =
                            state.profileData.newStatusText;
                    }
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
    onStatusChange,
} = profileSlice.actions;

export const { selectProfileData, selectMyPostsData } = profileSlice.selectors;

export default profileSlice.reducer;

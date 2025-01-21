import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { userPhoto } from "../../components/Fish";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

type FriendType = {
    id: number;
    name: string;
    ava_alt: string;
    ava_src: string;
};

type SideBarType = {
    friendsList: Array<FriendType>;
};

const initialState: SideBarType = {
    friendsList: [
        {
            id: 1,
            name: "Ivan",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 2,
            name: "Kirill",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 3,
            name: "Anton",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 4,
            name: "Mary",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
        {
            id: 5,
            name: "Alex",
            ava_alt: "ava",
            ava_src: userPhoto,
        },
    ],
};

export const sidebarSlice = createSliceWithThunks({
    name: "sideBar",
    initialState,
    selectors: {
        selectFriendsList: (state) => state.friendsList,
    },

    reducers: (create) => ({}),
});

export const { selectFriendsList } = sidebarSlice.selectors;

export default sidebarSlice.reducer;

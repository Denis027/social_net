import { asyncThunkCreator, buildCreateSlice, nanoid } from "@reduxjs/toolkit";
import { fishText, userPhoto } from "../../Fish";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export type ActionType = {
    payload: string;
    type: string;
};

export type DialogsDataType = {
    id: string;
    name: string;
    ava_alt: string;
    ava_src: string;
    message: string;
};

export type MessageDataType = {
    id: number;
    my_message: string;
    message: string | number | readonly string[] | undefined;
};

export type DialogsPageType = {
    newMessageText: string | number | readonly string[] | undefined;
    dialogsData: Array<DialogsDataType>;
    messagesData: Array<MessageDataType>;
};

const initialState: DialogsPageType = {
    newMessageText: "qwerty",
    dialogsData: [
        {
            id: "1",
            name: "Ivan",
            ava_alt: "ava",
            ava_src: userPhoto,
            message: fishText,
        },
        {
            id: "2",
            name: "Kirill",
            ava_alt: "ava",
            ava_src: userPhoto,
            message: fishText,
        },
        {
            id: "3",
            name: "Anton",
            ava_alt: "ava",
            ava_src: userPhoto,
            message: fishText,
        },
        {
            id: "4",
            name: "Mary",
            ava_alt: "ava",
            ava_src: userPhoto,
            message: fishText,
        },
        {
            id: "5",
            name: "Alex",
            ava_alt: "ava",
            ava_src: userPhoto,
            message: fishText,
        },
    ],
    messagesData: [
        {
            id: 1,
            my_message: "false",
            message: fishText,
        },
        {
            id: 2,
            my_message: "true",
            message: fishText,
        },
        {
            id: 3,
            my_message: "true",
            message: fishText,
        },
        {
            id: 4,
            my_message: "false",
            message: fishText,
        },
        {
            id: 5,
            my_message: "false",
            message: fishText,
        },
    ],
};

export const dialogsSlice = createSliceWithThunks({
    name: "dialogsPage",
    initialState,
    selectors: {
        selectDialogsPage: (state) => state,
    },

    reducers: (create) => ({
        sendNewMessage: create.reducer(
            (state: DialogsPageType): DialogsPageType => {
                let newMessege: MessageDataType = {
                    id: Number(nanoid()),
                    my_message: "true",
                    message: state.newMessageText,
                };
                state.messagesData.push(newMessege);
                state.newMessageText = "";
                return state;
            }
        ),
        updateMessageText: create.reducer(
            (state: DialogsPageType, action: ActionType): DialogsPageType => {
                state.newMessageText = action.payload;
                return state;
            }
        ),
    }),
});

export const { sendNewMessage, updateMessageText } = dialogsSlice.actions;

export const { selectDialogsPage } = dialogsSlice.selectors;

export default dialogsSlice.reducer;

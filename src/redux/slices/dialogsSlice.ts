import { asyncThunkCreator, buildCreateSlice, nanoid } from "@reduxjs/toolkit";
import { fishText, userPhoto } from "../../components/Fish";

const createSliceWithThunks = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator },
});

export type ActionType = {
    payload: string;
    type: string;
};

export type DialogsDataType = {
    id: String;
    name: String;
    ava_alt: String;
    ava_src: String;
    message: String;
};

export type MessagesDataType = {
    id: number;
    my_message: String;
    message: String | null;
};

type DialogsPageType = {
    dialogsPage: {
        newMessageText: String | null;
        dialogsData: Array<DialogsDataType>;
        messagesData: Array<MessagesDataType>;
    };
};

const initialState: DialogsPageType = {
    dialogsPage: {
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
    },
};

export const dialogsSlice = createSliceWithThunks({
    name: "dialogsPage",
    initialState,
    selectors: {
        selectDialogsPage: (state) => state.dialogsPage,
    },

    reducers: (create) => ({
        sendNewMessage: create.reducer(
            (state: DialogsPageType): DialogsPageType => {
                let newMessege: MessagesDataType = {
                    id: Number(nanoid()),
                    my_message: "true",
                    message: state.dialogsPage.newMessageText,
                };
                state.dialogsPage.messagesData.push(newMessege);
                state.dialogsPage.newMessageText = "";
                return state;
            }
        ),
        updateMessageText: create.reducer(
            (state: DialogsPageType, action: ActionType): DialogsPageType => {
                console.log(action);
                state.dialogsPage.newMessageText = action.payload;
                return state;
            }
        ),
    }),
});

export const { sendNewMessage, updateMessageText } = dialogsSlice.actions;

export const { selectDialogsPage } = dialogsSlice.selectors;

export default dialogsSlice.reducer;

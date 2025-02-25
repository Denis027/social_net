import { useAppDispatch, useAppSelector } from "../../app/types/hooks";
import {
    dialogsSlice,
    selectDialogsPage,
} from "../../app/redux/slices/dialogsSlice";
import Dialogs from "./Dialogs";
import React from "react";

const DialogsContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const dialogsPage = useAppSelector(selectDialogsPage);
    const { sendNewMessage, updateMessageText } = dialogsSlice.actions;

    const updateMessage = (newMessageText) => {
        dispatch(updateMessageText(newMessageText));
    };
    const sendMessage = () => {
        dispatch(sendNewMessage());
    };

    return (
        <div>
            <Dialogs
                dialogsPage={dialogsPage}
                sendMessage={sendMessage}
                updateMessage={updateMessage}
            />
        </div>
    );
};

export default DialogsContainer;

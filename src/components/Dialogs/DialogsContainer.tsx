import { useAppDispatch, useAppSelector } from "../../types/hooks.ts";
import {
    selectDialogsPage,
    sendNewMessage,
    updateMessageText,
} from "../../redux/slices/dialogsSlice.ts";
import Dialogs from "./Dialogs.tsx";
import React from "react";

const DialogsContainer: React.FC = () => {
    const dispatch = useAppDispatch();
    const dialogsPage = useAppSelector(selectDialogsPage);

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

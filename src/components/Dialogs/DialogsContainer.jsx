import { useAppDispatch, useAppSelector } from "../../app/hooks.ts";
import {
    selectDialogsPage,
    sendNewMessage,
    updateMessageText,
} from "../../redux/slices/dialogsSlice.ts";
import Dialogs from "./Dialogs";

const DialogsContainer = () => {
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

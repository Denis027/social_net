import {
    selectDialogsPage,
    sendNewMessage,
    updateMessageText,
} from "../../redux/slices/dialogsSlice";
import Dialogs from "./Dialogs";
import { useDispatch, useSelector } from "react-redux";

const DialogsContainer = (props) => {
    const dispatch = useDispatch();
    const dialogsPage = useSelector(selectDialogsPage);

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

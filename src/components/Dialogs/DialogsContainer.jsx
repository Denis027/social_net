import {
    sendNewMessageActionCreator,
    updateMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (newMessageText) => {
            dispatch(updateMessageTextActionCreator(newMessageText));
        },
        sendNewMessage: () => {
            dispatch(sendNewMessageActionCreator());
        },
    };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

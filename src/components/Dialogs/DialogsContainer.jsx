import { compose } from "redux";
import { sendNewMessage, updateMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    connect(mapStateToProps, {
        updateMessageText,
        sendNewMessage,
    })
)(Dialogs);

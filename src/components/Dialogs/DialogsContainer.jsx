import { compose } from "redux";
import { sendNewMessage, updateMessageText } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        updateMessageText,
        sendNewMessage,
    })
)(Dialogs);

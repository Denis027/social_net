import {
    updatePostTextActionCreator,
    addNewPostActionCreator,
} from "../../../../redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (newText) => {
            dispatch(updatePostTextActionCreator(newText));
        },
        addNewPost: () => {
            dispatch(addNewPostActionCreator());
        },
    };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

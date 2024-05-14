import React from "react";
import ProfileInfo from "./ProfileInfo";
import style from "./ProfileContainer.module.css";
import { connect } from "react-redux";
import {
    getUserProfile,
    getProfileStatus,
    editProfileStatus,
    onPostChange,
    addNewPost,
} from "../../redux/profileReducer";
import MyPosts from "./MyPosts/MyPosts";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { withRouter } from "../../hoc/withRouter";

class ProfileContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {   
        let userId = this.props.router.params.userId;
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId)
    };
    render = () => {
        return (
            <div className={style.ProfileWrapper}>
                <h1 className={style.title}>Profile</h1>
                <div className={style.profileInfoWrapper}>
                    <ProfileInfo profilePage={this.props.profilePage} editProfileStatus={this.props.editProfileStatus} />
                </div>
                <div className={style.myPostWrapper}>
                    <MyPosts
                        onPostChange={this.props.onPostChange}
                        addNewPost={this.props.addNewPost}
                        profilePage={this.props.profilePage}
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        isAuth: state.auth.isAuth,
    };
};

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        getUserProfile,
        getProfileStatus,
        editProfileStatus,
        addNewPost,
        onPostChange,
    })
)(ProfileContainer);

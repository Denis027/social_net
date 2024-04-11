import React from "react";
import ProfileInfo from "./ProfileInfo";
import style from "./ProfileContainer.module.css";
import { connect } from "react-redux";
import axios from "axios";
import {
    setUserProfile,
    onPostChange,
    addNewPost,
} from "../../../redux/ProfileReducer";
import MyPosts from "./MyPosts/MyPosts";

class ProfileContainer extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then((resp) => {
                this.props.setUserProfile(resp.data);
                // this.props.setUsersCount(resp.data.totalCount);
            });
    };
    render = () => {
        return (
            <div className={style.ProfileWrapper}>
                <h1 className={style.title}>Profile</h1>
                <ProfileInfo profilePage={this.props.profilePage} />
                <MyPosts
                    onPostChange={this.props.onPostChange}
                    addNewPost={this.props.addNewPost}
                    profilePage={this.props.profilePage}
                />
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    };
};

export default connect(mapStateToProps, {
    setUserProfile,
    addNewPost,
    onPostChange,
})(ProfileContainer);

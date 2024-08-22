import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import style from "./ProfileContainer.module.css";
import { connect, useDispatch, useSelector } from "react-redux";
import {
    getUserProfile,
    getProfileStatus,
    editProfileStatus,
    onPostChange,
    addNewPost,
    selectPosts,
    selectProfile,
    selectProfileStatus,
} from "../../redux/slices/profileSlice";
import MyPosts from "./MyPosts/MyPosts";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

const ProfileContainer = React.memo((props) => {
    const profile = useSelector(selectProfile);
    const profileStatus = useSelector(selectProfileStatus);
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();
    useEffect(() => {
        let userId = props.router.params.userId;
        dispatch(props.getUserProfile(userId));
        dispatch(props.getProfileStatus(userId));
    }, [props, props.router.params.userId, dispatch]);

    return (
        <div className={style.ProfileWrapper}>
            <h1 className={style.title}>Profile</h1>
            <div className={style.profileInfoWrapper}>
                <ProfileInfo
                    profile={profile}
                    profileStatus={profileStatus}
                    editProfileStatus={props.editProfileStatus}
                />
            </div>
            <div className={style.myPostWrapper}>
                <MyPosts
                    onPostChange={props.onPostChange}
                    addNewPost={props.addNewPost}
                    posts={posts}
                />
            </div>
        </div>
    );
});

export default compose(
    withRouter,
    connect(null, {
        getUserProfile,
        getProfileStatus,
        editProfileStatus,
        addNewPost,
        onPostChange,
    })
)(ProfileContainer);

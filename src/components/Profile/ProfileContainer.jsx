import React, { useEffect } from "react";
import ProfileInfo from "./ProfileInfo";
import style from "./ProfileContainer.module.css";
import { connect, useSelector } from "react-redux";
import {
  getUserProfile,
  getProfileStatus,
  editProfileStatus,
  onPostChange,
  onStatusChange,
  addNewPost,
  selectProfileData,
  selectMyPostsData,
} from "../../redux/slices/profileSlice";
import MyPosts from "./MyPosts/MyPosts";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";

const ProfileContainer = React.memo((props) => {
  const profileData = useSelector(selectProfileData);
  const myPostsData = useSelector(selectMyPostsData);

  useEffect(() => {
    let userId = props.router.params.userId;
    props.getUserProfile(userId);
    props.getProfileStatus(userId);
  }, [props]);

  return (
    <div className={style.ProfileWrapper}>
      <h1 className={style.title}>Profile</h1>
      <div className={style.profileInfoWrapper}>
        <ProfileInfo
          profile={profileData.profile}
          profileStatus={profileData.profileStatus}
          onStatusChange={props.onStatusChange}
          editProfileStatus={props.editProfileStatus}
        />
      </div>
      <div className={style.myPostWrapper}>
        <MyPosts
          onPostChange={props.onPostChange}
          addNewPost={props.addNewPost}
          posts={myPostsData.Posts}
          newPostText={myPostsData.newPostText}
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
    onStatusChange,
  })
)(ProfileContainer);

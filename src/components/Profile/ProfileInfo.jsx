import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../Preloader";
import { fishText, myPhoto } from "../Fish";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  return (
    <div>
      {!props.profile ? (
        <Preloader />
      ) : (
        <div className={style.ProfileInfoWrapper}>
          {!props.profile.photos.large ? myPhoto : props.profile.photos.large}
          <div className={style.status}>
            <ProfileStatus
              profileStatus={props.profileStatus}
              editProfileStatus={props.editProfileStatus}
              onStatusChange={props.onStatusChange}
            />
          </div>
          <h2 className={style.itemName}>
            {props.profile.fullName == null
              ? "User Name"
              : props.profile.fullName}
          </h2>
          <div className={style.itemDis}>
            {props.profile.aboutMe == null ? fishText : props.profile.aboutMe}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;

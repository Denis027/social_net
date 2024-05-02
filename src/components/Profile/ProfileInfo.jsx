import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../Preloader";
import { fishText, myPhoto } from "../Fish";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    return (
        <div>
            {!props.profilePage.profile ? (
                <Preloader />
            ) : (
                <div className={style.ProfileInfoWrapper}>
                    {props.profilePage.profile.photos.large == null
                        ? myPhoto
                        : props.profilePage.profile.photos.large}
                    <div className={style.status}>
                        <ProfileStatus profileStatus={props.profilePage.profileStatus} editProfileStatus={props.editProfileStatus} />
                    </div>
                    <h2 className={style.itemName}>
                        {props.profilePage.profile.fullName == null
                            ? "User Name"
                            : props.profilePage.profile.fullName}
                    </h2>
                    <div className={style.itemDis}>
                        {props.profilePage.profile.aboutMe == null
                            ? fishText
                            : props.profilePage.profile.aboutMe}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;

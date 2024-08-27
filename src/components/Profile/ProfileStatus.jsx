import React, { useEffect, useState } from "react";
import style from "./ProfileInfo.module.css";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [profileStatus, setProfileStatus] = useState(props.profileStatus);

  useEffect(() => {
    setProfileStatus(props.profileStatus);
  }, [props.profileStatus]);

  const editModeOn = () => {
    setEditMode(true);
  };

  const editModeOff = () => {
    props.editProfileStatus(profileStatus);
    setEditMode(false);
  };

  const changeStatus = (newStatus) => {
    setProfileStatus(newStatus);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span className={style.statusText} onDoubleClick={() => editModeOn()}>
            {profileStatus}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => changeStatus(e.target.value)}
            autoFocus={true}
            onBlur={() => editModeOff()}
            value={profileStatus}
            type="text"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

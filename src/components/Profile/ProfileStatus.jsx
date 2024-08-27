import React, { useState } from "react";
import style from "./ProfileInfo.module.css";
import { useSelector } from "react-redux";
import { selectProfileData } from "../../redux/slices/profileSlice";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newStatusText, setNewStatusText] = useState("");

  const profileData = useSelector(selectProfileData);

  const editModeOn = () => {
    setNewStatusText(props.profileStatus);
    setEditMode(true);
  };

  const editModeOff = () => {
    props.editProfileStatus(newStatusText);
    setEditMode(false);
  };

  const changeStatus = (newText) => {
    setNewStatusText(newText);
  };

  return (
    <div>
      {!editMode ? (
        <div>
          <span className={style.statusText} onDoubleClick={editModeOn}>
            {/* {props.profileStatus} */}
            {profileData.profileStatus}
          </span>
        </div>
      ) : (
        <div>
          <input
            onChange={(e) => changeStatus(e.target.value)}
            autoFocus={true}
            onBlur={editModeOff}
            value={newStatusText}
            type="text"
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;

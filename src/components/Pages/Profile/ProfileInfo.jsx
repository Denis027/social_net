import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../Preloader";

const ProfileInfo = (props) => {
    return (
        <div>
            {!props.profilePage.profile ? (
                <Preloader />
            ) : (
                <div className={style.ProfileInfoWrapper}>
                    <img
                        className={style.Ava}
                        alt="profilePhoto"
                        src={
                            props.profilePage.profile.photos.large == null
                                ? "https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png"
                                : props.profilePage.profile.photos.large
                        }
                    />
                    <h2 className={style.itemName}>
                        {props.profilePage.profile.fullName == null
                            ? "User Name"
                            : props.profilePage.profile.fullName}
                    </h2>
                    <div className={style.itemDis}>
                        {props.profilePage.profile.aboutMe == null
                            ? `Let me introduce myself. My name is Dmitry K. I’m 32
                            years old. I was born in Krasnodar, but now live in
                            Moscow. I’m divorced, but now I have a new girlfriend
                            who is a professional dancer. My parents live in a small
                            village near Krasnodar. I’m the only child in the
                            family. I have two lovely kids. I was graduated from the
                            university and worked as an engineer at the factory. My
                            work experience accounts 7 years. What concerns my
                            character and skills, I’m very hard-working,
                            responsible, diligent, and social person with a good
                            sense of humor. In the pastime, I’m crazy about fishing
                            and cars repairing. That’s all all about myself.`
                            : props.profilePage.profile.aboutMe}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileInfo;

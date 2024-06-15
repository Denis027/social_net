import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { myPhoto } from "../Fish";

const Header = (props) => {
    return (
        <div className={style.header}>
            {props.isAuth ? (
                <div className={style.avaWrapper}>
                    <button
                        onClick={() => {
                            props.getLogoutMe();
                        }}
                    >
                        Logout
                    </button>
                    {myPhoto}
                </div>
            ) : (
                <NavLink className={style.loginLink} to="/login">
                    Login
                </NavLink>
            )}
        </div>
    );
};

export default Header;

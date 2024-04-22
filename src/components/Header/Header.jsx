import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={style.header}>
            {props.authUserData.isAuth ? (
                <img
                    className={style.ava}
                    alt="profilePhoto"
                    src="https://i.natgeofe.com/k/ad9b542e-c4a0-4d0b-9147-da17121b4c98/MOmeow1_4x3.png"
                />
            ) : (
                <NavLink className={style.loginLink} to="/login">
                    Login
                </NavLink>
            )}
        </div>
    );
};

export default Header;

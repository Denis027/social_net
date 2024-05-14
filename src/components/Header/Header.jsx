import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { myPhoto } from "../Fish";
import { authAPI } from "../../api/authAPI";

const Header = (props) => {
    return (
        <div className={style.header}>
            {props.authUserData.isAuth ? (
                
                <div className={style.avaWrapper}><button onClick={()=>{authAPI.getLogoutMe()}}>Logout</button>{myPhoto}</div>
            ) : (
                <NavLink className={style.loginLink} to="/login">
                    Login
                </NavLink>
            )}
        </div>
    );
};

export default Header;

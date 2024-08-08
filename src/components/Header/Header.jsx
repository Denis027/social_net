import React, { useEffect } from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { myPhoto } from "../Fish";
import { useDispatch, useSelector } from "react-redux";
import {
    getAuthMe,
    selectIsAuth,
    getLogoutMe,
} from "../../redux/slices/authSlice";

const Header = (props) => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthMe());
    });

    return (
        <div className={style.header}>
            {isAuth ? (
                <div className={style.avaWrapper}>
                    <button
                        onClick={() => {
                            dispatch(getLogoutMe());
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

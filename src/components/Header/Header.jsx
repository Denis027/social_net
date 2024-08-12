import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import { myPhoto } from "../Fish";
import { getLogoutMe, selectIsAuth } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = (props) => {
    const dispatch = useDispatch();
    const isAuth = useSelector(selectIsAuth);
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

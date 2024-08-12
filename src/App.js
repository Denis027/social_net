import React, { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthMe, selectIsAuth } from "./redux/slices/authSlice";
//pages
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import LoginContainer from "./components/Login/LoginContainer";
import Preloader from "./components/Preloader";

const App = (props) => {
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();
    console.log(isAuth);
    useEffect(() => {
        dispatch(getAuthMe());
    });

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/login"
                        element={
                            isAuth ? (
                                <Navigate to="/profile" />
                            ) : (
                                <LoginContainer />
                            )
                        }
                    />
                    <Route
                        path="/profile/:userId?/*"
                        element={
                            isAuth ? (
                                <ProfileContainer />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route
                        path="/dialogs/*"
                        element={
                            isAuth ? (
                                <DialogsContainer />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />
                    <Route path="/users/*" element={<UsersPageContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

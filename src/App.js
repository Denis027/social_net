import React, { useEffect } from "react";
import "./App.css";
// eslint-disable-next-line
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAuthMe, selectIsAuth } from "./redux/slices/authSlice.ts";

//pages
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer.tsx";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
// eslint-disable-next-line
import LoginContainer from "./components/Login/LoginContainer";
// import { withSuspense } from "./hoc/withLazySuspense";

// const DialogsContainerLazy = lazy(() => <DialogsContainer />);

const App = (props) => {
    // eslint-disable-next-line
    const isAuth = useSelector(selectIsAuth);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAuthMe());
    });

    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    {/* <Route
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
                    /> */}
                    <Route path="/login" element={<LoginContainer />} />
                    <Route path="/profile" element={<ProfileContainer />} />
                    <Route
                        path="/profile/:userId?/*"
                        element={<ProfileContainer />}
                    />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users/*" element={<UsersPageContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

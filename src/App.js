import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
// import Music from "./components/Music/Music";
// import Settings from "./components/Settings/Settings";
// import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/UsersPage/UsersPageContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route
                        path="/profile/:userId?/*"
                        element={<ProfileContainer />}
                    />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users/*" element={<UsersPageContainer />} />
                    {/* <Route path="/music/*" element={<Music />} />
                    <Route path="/settings/*" element={<Settings />} />
                    <Route path="/news/*" element={<News />} /> */}
                    <Route path="/login/*" element={<LoginContainer />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

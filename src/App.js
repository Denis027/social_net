import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import ProfileContainer from "./components/Pages/Profile/ProfileContainer";
import Music from "./components/Pages/Music/Music";
import Settings from "./components/Pages/Settings/Settings";
import News from "./components/Pages/News/News";
import DialogsContainer from "./components/Pages/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersPageContainer from "./components/Pages/UsersPage/UsersPageContainer";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <NavContainer />
            <div className="app-wrapper-content">
                <Routes>
                    <Route path="/profile/*" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users/*" element={<UsersPageContainer />} />
                    <Route path="/music/*" element={<Music />} />
                    <Route path="/settings/*" element={<Settings />} />
                    <Route path="/news/*" element={<News />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;

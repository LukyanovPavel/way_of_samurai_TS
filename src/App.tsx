import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Routes, Route} from 'react-router-dom';
import {Settings} from "./components/settings/Settings";
import {Music} from "./components/music/music";
import {News} from "./components/news/News";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile'} element={<Dialogs/>}/>
                    <Route path={'/dialogs'} element={<Profile/>}/>
                    <Route path={'/news'} element={<News/>}/>
                    <Route path={'/music'} element={<Music/>}/>
                    <Route path={'/settings'} element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Routes, Route} from 'react-router-dom';
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/music";
import {News} from "./components/News/News";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Profile} from "./components/Profile/Profile";


function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Routes>
                    <Route path={'/profile/*'} element={
                        <Profile/>
                    }/>
                    <Route path={'/dialogs/*'} element={
                        <DialogsContainer/>
                    }/>
                    <Route path={'/News/*'} element={<News/>}/>
                    <Route path={'/Music/*'} element={<Music/>}/>
                    <Route path={'/Settings/*'} element={<Settings/>}/>
                    <Route path={'/Friends/*'} element={<></>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;

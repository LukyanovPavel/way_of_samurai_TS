import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

type isActiveType = {
    isActive: boolean
}

export const Navbar = () => {

    const setActive =({isActive}: isActiveType) => {
       return  isActive ? s.active : s.item
    }

    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} className={setActive}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} className={setActive}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} className={setActive}>Settings</NavLink>
            </div>
        </nav>
    )
}
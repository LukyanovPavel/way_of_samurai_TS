import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import {Sitebar} from "../Sitebar/Sitebar";

export type isActiveType = {
    isActive: boolean
}

export const Navbar = () => {

    const setActive = ({isActive}: isActiveType) => {
        return isActive ? s.active : s.item
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
                <NavLink to={'/News'} className={setActive}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Music'} className={setActive}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Settings'} className={setActive}>Settings</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/Friends'} className={setActive}>
                    <Sitebar/>
                </NavLink>
            </div>
        </nav>
    )
}
import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: number
    name: string
}

type isActiveType = {
    isActive: boolean
}

const setActive = ({isActive}: isActiveType) => {
    return isActive ? s.active : s.item
}

export const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <NavLink className={setActive} to={path}>{props.name}</NavLink>
    </div>
}

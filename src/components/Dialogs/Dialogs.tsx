import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type DialogsItemType = {
    id: string
    name: string
}

type MessageItemType = {
    message: string
}

const DialogItem = (props: DialogsItemType) => {
    let path = '/dialogs/' + props.id;

    return <div className={s.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const MessageItem = (props: MessageItemType) => {
    return <div className={s.message}>{props.message}</div>
}

export const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Pavel Vyazovich'/>
                <DialogItem id='2' name='Andrew Belkevich'/>
                <DialogItem id='3' name='Artem Ermolovich'/>
                <DialogItem id='4' name='Aleksandr Metselitsa'/>
                <DialogItem id='5' name='Vladislav Uzik'/>
                <DialogItem id='6' name='Anastasiya Zavadskaya'/>
                <DialogItem id='7' name='Denis Kryzhevizh'/>
                <DialogItem id='8' name='Nikolay Bolotsko'/>
                <DialogItem id='9' name='Roman Pavlushchik'/>
            </div>
            <div className={s.messages}>
                <MessageItem message='Hi'/>
                <MessageItem message='How is your it-kamasutra?'/>
                <MessageItem message='Yo!'/>
            </div>
        </div>
    );
};
import React from 'react';
import s from './../Dialogs.module.css'

type MessageItemType = {
    id: number
    message: string
}

export const MessageItem = (props: MessageItemType) => {
    return <div className={s.message}>{props.message}</div>
}
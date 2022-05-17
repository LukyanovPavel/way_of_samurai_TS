import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogsPageType} from "../../redux/state";
import {MessageItem} from "./MessageItem/MessageItem";
import {DialogItem} from "./DialogsItem/DialogsItem";


type DialogsPropsType = {
    sendMessage: () => void
    updateText: (text: string) => void
    newMessageText: string
    state: DialogsPageType
}

export const Dialogs: React.FC<DialogsPropsType> = ({sendMessage, updateText,
    newMessageText, state, ...restProps}) => {

    let messageElements = state.message.map(el => <MessageItem key={el.id} id={el.id} message={el.message}/>);
    let dialogsElements = state.dialogs.map(el => <DialogItem key={el.id} id={el.id} name={el.name}/>);

    const addMessageHandler = () => {
        sendMessage()
    }
    const changeTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(e.currentTarget.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {messageElements}
            </div>
            <div className={s.messages}>
                {dialogsElements}
            </div>
            <div>
                <textarea
                    value={newMessageText}
                    onChange={changeTextHandler}
                />
                <button
                    onClick={addMessageHandler}
                >Add Message
                </button>
            </div>
        </div>
    );
};
import React from 'react';
import {addMessageAC, updateMessageTextAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import store from "../../redux/redux-store.js";

export const DialogsContainer = () => {

    let state = store.getState()
    let dispatch = store.dispatch

    const sendMessage = () => {
        dispatch(addMessageAC(state.dialogsPage.newMessageText))
    }
    const updateText = (text: string) => {
        dispatch(updateMessageTextAC(text))
    }

    return <Dialogs
        sendMessage={sendMessage}
        updateText={updateText}
        newMessageText={state.dialogsPage.newMessageText}
        state={state.dialogsPage}
    />
};
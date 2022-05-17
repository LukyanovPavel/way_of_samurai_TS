import {ActionsType, DialogsPageType} from "./state";

export const addMessageAC = (messageText: string) =>
    ({type: 'ADD-MESSAGE', newMessageText: messageText} as const )
export const updateMessageTextAC = (newMessageText: string) =>
    ({type: 'ADD-UPDATE-NEW-MESSAGE-TEXT', newText: newMessageText} as const)

let initialState = {
    dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Dimych'},
        {id: 3, name: 'Roman'},
        {id: 4, name: 'Anrew'},
        {id: 5, name: 'Artem'}
    ],
    message: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
    newMessageText: 'Hello'
}

const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id: 6,
                message: action.newMessageText
            }
            state.message.push(newMessage)
            state.newMessageText = ''
            return state

        case "ADD-UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            return state

        default :
            return state
    }
}

export default dialogsReducer;
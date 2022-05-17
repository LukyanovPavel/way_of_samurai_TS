import profileReducer, {addPostAC, updatePostTextAC} from "./profile-reducer";
import dialogsReducer, {addMessageAC, updateMessageTextAC} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import {AppDispatch, RootState} from "./redux-store.js";

export type AppPropsType = {

}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarPageType
}
export type SidebarPageType = {
    friends: Array<FriendsType>
}
type FriendsType = {
    id: number
    name: string
}
export type ProfilePageType = {
    post: Array<PostType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    message: Array<MessageType>
    newMessageText: string
}
export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
type StoreType = {
    _state: StateType
    getState: () => StateType
    _onChange: () => void
    subscribe: (callback: () => void) => void
    dispatch: (action: ActionsType) => void
}


export type ActionsType = ReturnType<typeof addPostAC> |
    ReturnType<typeof updatePostTextAC> |
    ReturnType<typeof addMessageAC> |
    ReturnType<typeof updateMessageTextAC>

export const store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It`s my firs post', likesCount: 11},
                {id: 3, message: 'It`s my second post', likesCount: 5},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Nikola'},
                {id: 1, name: 'Volodya'},
                {id: 1, name: 'Alex'},
            ]
        }
    },
    _onChange() {
        console.log('no subscribers (observers)')
    },
    getState() {
        return this._state
    },
    subscribe(callback) {
        this._onChange = callback
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()

    }
}


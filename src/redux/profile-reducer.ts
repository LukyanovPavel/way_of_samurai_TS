import {ActionsType, ProfilePageType, StateType} from "./state";

export const addPostAC = (postText: string) =>
    ({type: "ADD-POST", postText: postText} as const)
export const updatePostTextAC = (postText: string) =>
    ({type: 'UPDATE-NEW-POST-TEXT', newText: postText} as const)

let initialState = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It`s my firs post', likesCount: 11},
        {id: 3, message: 'It`s my second post', likesCount: 5},
    ],
    newPostText: 'it-kamasutra.com',
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: action.postText,
                likesCount: 0,
            }
            state.post.push(newPost)
            state.newPostText = ''
            return state

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state

        default :
            return state
    }
}

export default profileReducer;
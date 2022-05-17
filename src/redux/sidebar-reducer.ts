import {ActionsType, SidebarPageType} from "./state";

let initialState = {
    friends: [
        {id: 1, name: 'Nikola'},
        {id: 1, name: 'Volodya'},
        {id: 1, name: 'Alex'},
    ]
}

const sidebarReducer = (state: SidebarPageType = initialState, action: ActionsType) => {


    return state;
}

export default sidebarReducer;
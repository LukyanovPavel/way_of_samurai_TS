import React from "react";
import {addPostAC, updatePostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import store from "../../../redux/redux-store.js";

export const MyPostsContainer = () => {

    let state = store.getState()
    let dispatch = store.dispatch

    const addPost = () => {
        dispatch(addPostAC(state.profilePage.newPostText))
    }

    const updateTextArea = (text: string) => {
        dispatch(updatePostTextAC(text))
    }

    return <MyPosts
        addPost={addPost}
        updateTextArea={updateTextArea}
        newPostText={state.profilePage.newPostText}
        posts={state.profilePage.post}
    />

}
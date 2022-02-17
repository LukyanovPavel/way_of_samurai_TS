import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div>
            my posts
            <div className={s.posts}>
                new post
            </div>
            <Post messages={'Hi, how are you?'} likesCount={15}/>
            <Post messages={'It`s my firs post'} likesCount={20}/>
            <Post messages={'It`s my second post'} likesCount={25}/>
        </div>
    )
}
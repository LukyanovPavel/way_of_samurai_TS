import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post messages={'Hi, how are you?'} likesCount={15}/>
                <Post messages={'It`s my firs post'} likesCount={20}/>
                <Post messages={'It`s my second post'} likesCount={25}/>
            </div>
        </div>
    )
}
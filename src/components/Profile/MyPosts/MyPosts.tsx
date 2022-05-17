import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostType} from "../../../redux/state";

type MyPostsType = {
    posts: Array<PostType>
    addPost: () => void
    updateTextArea: (text: string) => void
    newPostText: string
}

export const MyPosts: React.FC<MyPostsType> = ({posts, addPost,
    updateTextArea, newPostText, ...restProps}) => {

    let postElements = posts.map(el => <Post messages={el.message} likesCount={el.likesCount}/>)

    const onClickAddPostHandler = () => {
        addPost()
    }
    const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateTextArea(e.currentTarget.value)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={newPostText}
                        onChange={onChangeTextAreaHandler}
                    />
                </div>
                <div>
                    <button onClick={onClickAddPostHandler}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
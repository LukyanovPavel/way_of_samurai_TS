import React from "react";
import s from './Post.module.css'

type PostType = {
    messages: string,
    likesCount: number,
}

export const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            {props.messages}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}
import s from './FriendsItem.module.css';

type FriendsItemType = {
    name: string
}

export const FriendsItem = (props: FriendsItemType) => {

    return (
        <div className={s.item}>
            <div className={s.circle}></div>
            {props.name}
        </div>
    )
}
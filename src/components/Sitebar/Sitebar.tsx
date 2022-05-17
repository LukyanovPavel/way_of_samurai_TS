import {FriendsItem} from "./FriendsItem/FriendsItem";
import s from './Sitebar.module.css';

export const Sitebar = () => {

    return (
        <div>
            <div className={s.friends}>Friends</div>
            <div className={s.wrap}>
                <FriendsItem name={'Sasha'}/>
                <FriendsItem name={'Petya'}/>
                <FriendsItem name={'Ira'}/>
            </div>
        </div>
    )
}
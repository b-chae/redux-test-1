import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getNextFriend } from "../../common/mockData";
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from "../common";
import FriendList from "../component/friendList";
import NumberSelect from "../component/NumberSelect";
import { addFriend, setAgeLimit, setShowLimit } from "../state";

export default function FriendMain() {
    const [
        ageLimit,
        showLimit,
        friendsWithAgeLimit,
        friendsWithAgeShowLimit
    ] = useSelector(state => {
        const {friends, ageLimit, showLimit} = state.friend
        const friendsWithAgeLimit = friends.filter(
            friend => friend.age <= ageLimit
        )
        return [
            ageLimit,
            showLimit,
            friendsWithAgeLimit,
            friendsWithAgeLimit.slice(0, showLimit)
        ]
    }, shallowEqual)
    const dispatch = useDispatch()

    function onAdd() {
        const friend = getNextFriend()
        dispatch(addFriend(friend))
    }

    console.log("FriendMain render")
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <NumberSelect
                onChange={v => dispatch(setAgeLimit(v))}
                value={ageLimit}
                options={AGE_LIMIT_OPTIONS}
                postfix='세 이하만 보기'
            />
            <FriendList friends={friendsWithAgeLimit} />
            <NumberSelect
                onChange={v => dispatch(setShowLimit(v))}
                value={showLimit}
                options={SHOW_LIMIT_OPTIONS}
                postfix='명 이하만 보기 (연령 제한 적용)'
            />
            <FriendList friends={friendsWithAgeShowLimit} />
        </div>
    )
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT]
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT]
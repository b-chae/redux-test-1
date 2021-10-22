import React, { useEffect, useReducer } from "react";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store";
import FriendList from "../component/friendList";
import { addFriend } from "../state";

export default function FriendMain() {
    const [, forceUpdate] = useReducer(v => v+1, 0)
    useEffect(() => {
        let prevFriends = store.getState().friend.friends
        const unsubscribe = store.subscribe(() => {
            // 책에서와 다르게 코딩한 부분
            // prevFriends !== store.friends
            if (prevFriends !== store.getState().friend.friends){
                forceUpdate()
            }
            prevFriends = store.getState().friend.friends
        })
        return () => unsubscribe()
    }, [])

    function onAdd() {
        const friend = getNextFriend()
        store.dispatch(addFriend(friend))
    }

    console.log("FriendMain render")
    const friends = store.getState().friend.friends
    return (
        <div>
            <button onClick={onAdd}>친구 추가</button>
            <FriendList friends={friends} />
        </div>
    )
}
import React, { useEffect, useReducer } from "react";
import { getNextFriend } from "../../common/mockData";
import store from "../../common/store";
import FriendList from "../component/friendList";
import { addFriend } from "../state";

export default function FriendMain() {
    const [, forceUpdate] = useReducer(v => v+1, 0)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceUpdate())
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
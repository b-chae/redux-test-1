import { combineReducers, createStore } from "redux";
import { addFriend, editFriend, friendReducer, removeFriend } from "./friend/state";
import { addTimeline, editTimeline, increaseNextPage, removeTimeline, timelineReducer } from "./timeline/state";

const reducer = combineReducers({
    timeline: timelineReducer,
    friend: friendReducer
})

const store = createStore(reducer)

store.subscribe(() => {
    const state = store.getState()
    console.log(state)
})

store.dispatch(addTimeline({ id: 1, desc: 'hello'}))
store.dispatch(addTimeline({ id: 2, desc: 'bye'}))
store.dispatch(increaseNextPage())
store.dispatch(editTimeline({ id: 2, desc: 'bye'}))
store.dispatch(removeTimeline({ id: 1, desc: 'so what?'}))

store.dispatch(addFriend({ id: 1, name: 'lily'}))
store.dispatch(addFriend({ id: 2, name: 'js'}))
store.dispatch(editFriend({ id: 1, name: 'now'}))
store.dispatch(removeFriend({ id: 2, name: 'js'}))
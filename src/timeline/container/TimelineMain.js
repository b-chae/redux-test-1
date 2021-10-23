import React, { useEffect, useReducer } from "react";
import { getNextTimeline } from "../../common/mockData";
import store from "../../common/store";
import TimelineList from "../component/TimelineList";
import { addTimeline } from "../state";

export default function TimelineMain() {
    const [, forceUpdate] = useReducer(v => v+1, 0)
    useEffect(() => {
        const unsubscribe = store.subscribe(() => forceUpdate())
        return () => unsubscribe()
    }, [])

    function onAdd() {
        const timeline = getNextTimeline()
        store.dispatch(addTimeline(timeline))
    }

    console.log("TimelineMain render")
    const timelines = store.getState().timeline.timelines
    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} />
        </div>
    )
}
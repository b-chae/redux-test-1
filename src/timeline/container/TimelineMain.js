import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNextTimeline } from "../../common/mockData";
import TimelineList from "../component/TimelineList";
import { actions } from "../state";

export default function TimelineMain() {
    const dispatch = useDispatch()
    const timelines = useSelector(state => state.timeline.timelines)
    const isLoading = useSelector(state => state.timeline.isLoading)

    function onAdd() {
        const timeline = getNextTimeline()
        dispatch(actions.addTimeline(timeline))
    }

    function onLike(e){
        const id = Number(e.target.dataset.id)
        const timeline = timelines.find(item => item.id === id)
        dispatch(actions.requestLike(timeline))
    }

    console.log("TimelineMain render")

    return (
        <div>
            <button onClick={onAdd}>타임라인 추가</button>
            <TimelineList timelines={timelines} onLike={onLike}/>
            {isLoading && <p>전송 중 ...</p>}
        </div>
    )
}
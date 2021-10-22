import createReducer from "../common/createReducer"

const ADD = 'timeline/ADD'
const REMOVE = 'timeline/REMOVE'
const EDIT = 'timeline/EDIT'
const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE'

export const addTimeline = timeline => ({type: ADD, timeline})
export const removeTimeline = timeline => ({type: REMOVE, timeline})
export const editTimeline = timeline => ({type: EDIT, timeline})
export const increaseNextPage = () => ({type: INCREASE_NEXT_PAGE})

const INITIAL_STSTE = {timelines: [], nextPage: 0}
export const timelineReducer = createReducer(INITIAL_STSTE, {
    [ADD]: (state, action) => state.timelines.push(action.timeline),
    [REMOVE]: (state, action) => (
        state.timelines = state.timelines.filter(
            timeline => timeline.id !== action.timeline.id
        )
    ),
    [EDIT]: (state, action) => {
        const idx = state.timelines.findIndex(
            timeline => timeline.id === action.timeline.id
        )
        if(idx >= 0){
            state.timelines[idx] = action.timeline
        }
    },
    [INCREASE_NEXT_PAGE]: (state, ) => (state.nextPage += 1)
})
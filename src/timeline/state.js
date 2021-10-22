import createItemsLogic from "../common/createItemsLogic"
import createReducer from "../common/createReducer"
import mergeReducers from "../common/mergeReducers"

const INCREASE_NEXT_PAGE = 'timeline/INCREASE_NEXT_PAGE'

const {add, remove, edit, reducer: timelinesReducer} = createItemsLogic('timelines')

export const addTimeline = add
export const removeTimeline = remove
export const editTimeline = edit
export const increaseNextPage = () => ({type: INCREASE_NEXT_PAGE})

const INITIAL_STSTE = {nextPage: 0}
const reducer = createReducer(INITIAL_STSTE, {
    [INCREASE_NEXT_PAGE]: (state, ) => (state.nextPage += 1)
})
const reducers = [reducer, timelinesReducer]
export const timelineReducer = mergeReducers(reducers)
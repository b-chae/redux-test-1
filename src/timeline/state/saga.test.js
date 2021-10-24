import { call, put, take } from "@redux-saga/core/effects"
import { cloneableGenerator } from "@redux-saga/testing-utils"
import { actions, types } from "."
import { callApiLike } from "../../common/api"
import { fetchData } from "./saga"

describe("fetchData", () => {
    const timeline = { id: 1 }
    const action = actions.requestLike(timeline)
    const gen = cloneableGenerator(fetchData)()
    expect(gen.next().value).toEqual(take(types.REQUEST_LIKE))
    expect(gen.next(action).value).toEqual(put(actions.setLoading(true)))
    expect(gen.next().value).toEqual(put(actions.addLike(timeline.id, 1)))
    expect(gen.next(action).value).toEqual(put(actions.setError('')))
    expect(gen.next().value).toEqual(call(callApiLike))
    it("on fail callApiLike", () => {
        const gen2 = gen.clone()
        const errorMsg = "error"
        expect(gen2.throw(errorMsg).value).toEqual(put(actions.setError(errorMsg)))
        expect(gen2.next().value).toEqual(put(actions.addLike(timeline.id, -1)))
    })
    it("on success callApiLike", () => {
        const gen2 = gen.clone()
        expect(gen2.next(Promise.resolve()).value).toEqual(
            put(actions.setLoading(false))
        )
        expect(gen2.next().value).toEqual(take(types.REQUEST_LIKE))
    })
})
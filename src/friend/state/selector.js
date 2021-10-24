import { createSelector } from "reselect"

export const getFriends = state => state.friend.friends
export const getAgeLimit = (_, ageLimit) => ageLimit
export const getShowLimit = state => state.friend.showLimit

export const makeGetFriendsWithAgeLimit = () => {
    return createSelector([getFriends, getAgeLimit], (friends, ageLimit) =>
        friends.filter(friend => friend.age <= ageLimit)
    )
}
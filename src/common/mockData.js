const friends = [
    {name: "lily", age: 1},
    {name: "alan", age: 2},
    {name: "david", age: 3},
    {name: "now", age: 4},
]

const timelines = [
    {desc: "a", likes: 0},
    {desc: "hi everyone", likes: 10},
    {desc: "nice to meet you", likes: 20},
    {desc: "i love react", likes: 30},
]

function makeDataGenerator(items) {
    let itemIndex = 0
    return function getNextData() {
        const item = items[itemIndex % items.length]
        itemIndex += 1
        return { ...item, id: itemIndex }
    }
}

export const getNextFriend = makeDataGenerator(friends)
export const getNextTimeline = makeDataGenerator(timelines)
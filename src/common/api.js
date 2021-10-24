export function callApiLike() {
    return new Promise((resolve, reject) => {
        console.log('1000')
        setTimeout(resolve, 1000)
    })
}
export const reverseSearch = (state, lookupKey, val) => {
    for (const obj of Object.keys(state)) {
        if (state[obj][lookupKey] === val)
            return state[obj]
    }
    return null;
}

export const abbreviate = (string, max_char) => {
    const splitString = string.split("")
    if (splitString.length > max_char) {
        return splitString.splice(0, max_char).join("").concat("...")
    }
    else {
        return string
    }
}

export const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5)
}

export const getNumOfCols = () => {
    const windowSize = window.innerWidth
    if (windowSize > 1850) return 7 
    if (windowSize > 1630) return 6
    if (windowSize > 1340) return 5
    if (windowSize > 1080) return 4
    return 3
}


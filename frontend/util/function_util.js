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
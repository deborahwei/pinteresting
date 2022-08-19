export const reverseSearch = (state, lookupKey, val) => {
    for (const obj of Object.keys(state)) {
        if (state[obj][lookupKey] === val)
            return state[obj]
    }
    return null;
}
import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER"
export const RECEIVE_USERS = "RECEIVE_USERS"


export const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

export const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users
})

export const fetchUsers = (pins, users) => dispatch => {
    const usersSet = new Set() 
    Object.values(pins).forEach( pin => {
        usersSet.add(pin.creator)
    })
    const userIds = []
    for (const userId of usersSet) {
        if (!(userId in users))
            userIds.push(userId)
    }
    return UserAPIUtil.fetchUsers(userIds).then(users => (
        dispatch(receiveUsers(users))
    ))
}

export const fetchUser = user => dispatch => (
    UserAPIUtil.fetchUser(user).then(user => (
        dispatch(receiveUser(user))
    ))
)

export const fetchUserByUsername = username => dispatch => (
    UserAPIUtil.fetchUserByUsername(username).then(user => (
        dispatch(receiveUser(user))
    ))
)

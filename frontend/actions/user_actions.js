import * as UserAPIUtil from "../util/user_api_util";

export const RECEIVE_USER = "RECEIVE_USER"

// export const fetchUsers = (users) => dispatch => {
//     return UserAPIUtil.fetchUsers(userIds).then(users => )
// }

export const receiveUser = (user) => ({
    type: RECEIVE_USER, 
    user
})

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

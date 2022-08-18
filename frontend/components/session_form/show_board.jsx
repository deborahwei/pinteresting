import React from 'react'

const BoardShowContainer = (props) => {

}

const mSTP = (state, props) => {
    const userId = props.match.params.userId // gets userId from route path

    return {
        user: state.entities.users[userId],
        currentUser: state.entities.users[state.session.id],
    }
}

const mDTP = dispatch => {
    return {
        openModal: (formType) => dispatch(openModal(formType))
    }
}
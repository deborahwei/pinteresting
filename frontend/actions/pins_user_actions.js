import * as PinsUserAPIUtil from '../util/pins_user_api_util';
import { receivePin } from './pin_actions';

export const REMOVE_SAVED_PIN = 'REMOVE_SAVED_PIN';
export const RECEIVE_SAVED_PIN = 'RECEIVE_SAVED_PIN';

export const receiveSavedPin = (pin, userId) => {
    console.log(userId)
    return {
        type: RECEIVE_SAVED_PIN,
        userId, 
        pin
    }
}

export const removeSavedPin = (user, pinId) => {
    return {
        type: REMOVE_SAVED_PIN,
        user, 
        pinId
    }
}

export const savePin = (pinId, userId) => dispatch => {
    console.log("ACTIONS", pinId)
    return PinsUserAPIUtil.savePin(pinId).then(pin => (
        dispatch(receiveSavedPin(pin, userId))
    ))
};

export const unsavePin = (pinId) => dispatch  => (
    PinsUserAPIUtil.unsavePin(pinId).then((user) => (
        dispatch(removeSavedPin(user, pinId))
    ))
);


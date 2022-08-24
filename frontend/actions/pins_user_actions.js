import * as PinsUserAPIUtil from '../util/pins_user_api_util';
import { receivePin } from './pin_actions';

export const REMOVE_SAVED_PIN = 'REMOVE_SAVED_PIN';

export const removeSavedPin = (user, pinId) => {
    return {
        type: REMOVE_SAVED_PIN,
        user, 
        pinId
    }
}

export const savePin = (pinId) => dispatch => (
    PinsUserAPIUtil.savePin(pinId).then(pin => (
        dispatch(receivePin(pin))
    ))
);

export const unsavePin = (pinId) => dispatch  => (
    PinsUserAPIUtil.unsavePin(pinId).then((user) => (
        dispatch(removeSavedPin(user, pinId))
    ))
);


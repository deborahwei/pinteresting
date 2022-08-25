import * as PinsUserAPIUtil from '../util/pins_user_api_util';
import { receiveUser } from './user_actions';

export const savePin = (pinId) => dispatch => {
    return PinsUserAPIUtil.savePin(pinId).then((user) => (
        dispatch(receiveUser(user))
    ))
};

export const unsavePin = (pinId) => dispatch  => (
    PinsUserAPIUtil.unsavePin(pinId).then((user) => (
        dispatch(receiveUser(user))
    ))
);


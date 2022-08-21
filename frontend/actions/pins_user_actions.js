import * as PinsUserAPIUtil from '../util/pins_user_api_util';
import { receivePin } from './pin_actions';
// import { receiveUser } from './user' don't know what info I want after saving and unsaving a pin

export const savePin = (pinId) => (
    PinsUserAPIUtil.savePin(pinId).then(pin => (
        dispatch(receivePin(pin))
    ))
);

export const unsavePin = (pinId) => (
    PinsUserAPIUtil.unsavePin(pinId).then(pin => (
        dispatch(receivePin(pin))
    ))
);


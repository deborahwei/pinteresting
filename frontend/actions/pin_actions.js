import * as PinAPIUtil from "../util/pin_api_util"

export const RECEIVE_PINS = 'RECEIVE_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

export const receivePins = (pins) => {
    return {
        type: RECEIVE_PINS,
        pins
    }
}

export const receivePin = (pin) => {
    return {
        type: RECEIVE_PIN,
        pin
    }
}

export const removePin = (pinId) => {
    return {
        type: REMOVE_PIN,
        pinId
    }
}

export const receivePinErrors = (errors) => {
    return {
        type: RECEIVE_PIN_ERRORS,
        errors
    }
}

export const fetchPins = () => dispatch => (
    PinAPIUtil.fetchPins().then(pins => (
      dispatch(receivePins(pins))
    ))
);

export const fetchPin = pinId => dispatch => (
    PinAPIUtil.fetchPin(pinId).then(pin => (
      dispatch(receivePin(pin))
    ))
);

export const createPin = pin => dispatch => (
    PinAPIUtil.createPin(pin).then(pin => {
      dispatch(receivePin(pin))
    }, err => {
        return dispatch(receivePinErrors(err.responseJSON))
    })
);

export const updatePin = pin => dispatch => (
    PinAPIUtil.updatePin(pin).then(pin => {
        dispatch(receivePin(pin))
    }, err => {
          return dispatch(receivePinErrors(err.responseJSON))
    })
);

export const fetchSavedPins = userId => dispatch => (
    PinAPIUtil.fetchSavedPins(userId).then((pins) => (
      dispatch(receiveFilteredPins(pins))
    ))
);

export const fetchCreatedPins = userId => dispatch => (
    PinAPIUtil.fetchCreatedPins(userId).then((pins) => (
      dispatch(receiveFilteredPins(pins))
    ))
);



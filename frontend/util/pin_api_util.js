export const fetchPin = (pinId) => (
    Promise.resolve($.ajax({
        method: 'GET',
        url: `/api/pins/${pinId}`
    }))
);

export const fetchPins = (pinIds) => { 
  return Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/pins`,
    data: {
      pin_ids: pinIds
    }
  }))
};

export const fetchHomepagePins = (numPins) => {
  return Promise.resolve($.ajax({
    method: 'GET',
    url: '/api/pins/homepage',
    data: {num_pins: numPins}
  }))
}

export const createPin = (pin) => (
    Promise.resolve($.ajax({
      method: 'POST',
      url: `/api/pins`,
      data: pin,
      contentType: false, 
      processData: false
    }))
);

export const updatePin = (pin) => (
    Promise.resolve($.ajax({
      method: 'PATCH',
      url: `/api/pins/${pin.id}`,
      data: {pin}
    }))
);

export const deletePin = (pinId) => (
    Promise.resolve($.ajax({
        method: 'DELETE',
        url: `/api/pins/${pinId}`,
      }))
);


export const fetchSavedPins = (userId) => {
  return Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/users/saved`, 
    data: {user_id: userId}
  }))
};

export const fetchCreatedPins = (userId) => {
  return Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/users/created`, 
    data: {user_id: userId}
  }))
};


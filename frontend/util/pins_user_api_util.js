export const saveOthersPin = (pinId) => { 
    return Promise.resolve($.ajax({
      method: 'GET',
      url: `/api/pins_user`, 
      data: {pin_id: pinId}
    }))
};

export const saveOwnPin = (pinId) => { 
    return Promise.resolve($.ajax({
      method: 'PATCH',
      url: `/api/pins_user/${pinId}`, 
      data: {saved_pin: true}
    }))
};

export const unsaveOwnPin = (pinId) => { 
    return Promise.resolve($.ajax({
      method: 'PATCH',
      url: `/api/pins_user/${pinId}`, 
      data: {saved_pin: false}
    }))
};

export const unsaveOthersPin = (pinId) => {  // for people who don't own the pin 
    return Promise.resolve($.ajax({
      method: 'DELETE',
      url: `/api/pins_user/${pinId}`
    }))
};

export const savePin = (pinId) => {
  return Promise.resolve($.ajax({
    method: 'GET', 
    url: `api/pins_user/save/${pinId}`, 
    data: {
      pins_user: {saved_pin: true}
    }
  }))
}

export const unsavePin = (pinId) => {
  return Promise.resolve($.ajax({
    method: 'GET', 
    url: `api/pins_user/unsave/${pinId}`, 
    data: {
      pins_user: {saved_pin: false}
    }
  }))
}
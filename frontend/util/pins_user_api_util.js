export const savePin = (pinId) => { 
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

export const unsavePin = (pinId) => {  // for people who don't own the pin 
    return Promise.resolve($.ajax({
      method: 'DELETE',
      url: `/api/pins_user/${pinId}`
    }))
};
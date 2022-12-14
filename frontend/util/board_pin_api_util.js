export const fetchBoardPins = (boardId) => (
  Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/board_pins`, 
    data: {board_id: boardId}
  }))
)    

export const addPinToBoard = (boardId, pinId) => { 
    return Promise.resolve($.ajax({
      method: 'POST',
      url: `/api/board_pins`, 
      data: {
        board_pin: {
          board_id: boardId,
          pin_id: pinId
        }
      }
    }))
};


export const removePinFromBoard = (boardId, pinId) => { 
   return $.ajax({
      method: 'DELETE',
      url: `/api/board_pins/delete`, // route needs an id at the end 
      data: {
          board_id: boardId,
          pin_id: pinId
        }
    })
};


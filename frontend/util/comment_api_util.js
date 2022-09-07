export const fetchPinComments = (pinId) => (
    Promise.resolve($.ajax({
      method: 'GET',
      url: `/api/pins/${pinId}/comments`, 
    }))
 )    
  
export const createComment = (pinId, text) => (
    Promise.resolve($.ajax({
      method: 'POST',
      url: `/api/pins/${pinId}/comments`, 
      data: {text: text}
    }))
 )    
  
export const updateComment = (pinId, commentId, comment) => (
    Promise.resolve($.ajax({
      method: 'PATCH',
      url: `/api/pins/${pinId}/comments/${commentId}`, 
      data: {comment}
    }))
 )    
  
export const deleteComment = (pinId, commentId) => (
    Promise.resolve($.ajax({
      method: 'DELETE',
      url: `/api/pins/${pinId}/comments/${commentId}`, 
    }))
 )    
  
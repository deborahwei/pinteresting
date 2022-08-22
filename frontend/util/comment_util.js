export const fetchPinComments = (pinId) => (
    Promise.resolve($.ajax({
      method: 'GET',
      url: `/api/pin/${pinId}/comments`, 
    }))
 )    
  
export const createComment = (pinId, text) => (
    Promise.resolve($.ajax({
      method: 'POST',
      url: `/api/pin/${pinId}/comments`, 
      data: {text: text}
    }))
 )    
  
export const deleteComment = (pinId, commentId) => (
    Promise.resolve($.ajax({
      method: 'GET',
      url: `/api/pin/${pinId}/comments/${commentId}`, 
    }))
 )    
  
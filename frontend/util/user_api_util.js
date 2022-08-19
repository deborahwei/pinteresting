export const fetchUser = (userId) => (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`,
    })
  );

export const fetchUserByUsername = (username) => (
  Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/users/username/${username}`
  }))
)
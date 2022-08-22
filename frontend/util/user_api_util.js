export const fetchUser = (userId) => (
    $.ajax({
      method: 'GET',
      url: `/api/users/${userId}`,
    })
  );

export const fetchUsers = (userIds) => {
  return Promise.resolve($.ajax({
    method: "GET",
    url: '/api/users',
    data: {
     user_ids: userIds
    }
  }))
};

export const fetchUserByUsername = (username) => (
  Promise.resolve($.ajax({
    method: 'GET',
    url: `/api/users/username/${username}`
  }))
);
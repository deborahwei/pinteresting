export const fetchUser = (userId) => (
    $.ajax({
      method: 'GET',
      url: `/api/user/${userId}`,
    })
  );
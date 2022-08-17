export const fetchUser = (user) => (
    $.ajax({
      method: 'GET',
      url: `/api/user/${user.username}`,
    })
  );
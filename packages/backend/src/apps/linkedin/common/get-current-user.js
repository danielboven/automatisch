const getCurrentUser = async ($) => {
  const response = await $.http.get('/v2/me');

  const currentUser = response.data;
  return currentUser;
};

export default getCurrentUser;

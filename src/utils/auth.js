export const isAuthenticated = () => {
  const token = localStorage.getItem('token');
  return token && token !== 'undefined' && token !== 'null';
};

export const logout = () => {
  localStorage.removeItem('token');
};
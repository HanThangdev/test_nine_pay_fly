import http from '..';

const authRepository = {
  logout: () => http.get('/logout'),
};

export default authRepository;

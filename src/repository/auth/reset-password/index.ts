import http from '@/repository';

const api = {
  resetPassword: (email: string) =>
    http.put(`/api/user/forgot-password?email=${email}`),
  verifyEmail: (token?: string) =>
    http.put(`/api/user/forgot-password/verify?token=${token}`),

  updatePassword: (code?: string, password?: string) =>
    http.put(
      `/api/user/forgot-password/change-password?token=${code}&password=${password}`,
    ),
  updatePasswordThirdParty: (password?: string) =>
    http.put(`/api/user/password?password=${password}`),
};

export default api;

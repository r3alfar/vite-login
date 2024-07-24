const baseUrl = import.meta.env.VITE_LOCAL_DB_URL

const userApi = {
  // getUserByUsername: baseUrl + "/user/login",
  createUser: () => baseUrl + "/auth/signup",
  signIn: () => baseUrl + "/auth/signin",
  logout: () => baseUrl + "/auth/logout",
  refreshToken: () => baseUrl + "/auth/refresh",
  verifyToken: () => baseUrl + "/auth/verify-token",
  getCurrentUser: () => baseUrl + "/auth/getCurrentUser",
}

export default userApi


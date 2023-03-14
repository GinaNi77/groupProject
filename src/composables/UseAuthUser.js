import { ref } from "vue";

const user = ref(null);

export default function useAuthUser() {

     /**
   * Login with email and password
   */
  const login = async ({ email, password }) => {};

  /**
   * Logout
   */
  const logout = async () => {};

  /**
   * Check if the user is logged in or not
   */
  const isLoggedIn = () => {
    return !!user.value
  };

  /**
   * Register
   */

  const register = async ({ email, password, ...meta }) => {};

    return {
        user,
        login,
        isLoggedIn,
        logout,
        register,
      };
}
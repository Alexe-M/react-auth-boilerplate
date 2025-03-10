import API from "./API"; // Import de l'instance Axios

export default class APIManager {

  //Inscription (Signup)
  static async registerUser(email, password, passwordConfirmation) {
    try {
      const response = await API.post("/users", {
        user: { email, password, password_confirmation: passwordConfirmation },
      });
      return response.data;
    } catch (error) { 
      throw error.response?.data || { error: "Signup failed" };
    }
  }

  //Connexion (Login)
  static async loginUser(email,password) {
    try {
      const response = await API.post("/users/sign_in", {
        user: { email, password },
      });

      //Stock le token JWT après connexion
      localStorage.setItem("token", response.headers.authorization);

      return response.data;
    } catch (error) {
      throw error.response?.data || { error: "Login failed" };
    }
  }

  //Déconnexion (Logout)
  static async logoutUser() {
    try {
      const token = localStorage.getItem("token");

      if (!token) throw new Error("No token found");

      await API.delete("/users/sign_out", {
        headers: { Authorization: `Bearer ${token}` }
      });

      //Supprime le token après déconnexion
      localStorage.removeItem("token");
    } catch (error) {
      throw error.response?.data || { error: "Logout failed" };
    }
  }

  //Vérifier les données de l'utilisateur 
  static async getUserData() {
    try {
      const response = await API.get("/member-data");
      return response.data;
    } catch (error) {
      throw error.response?.data || { error: "Failed to fetch user data"};
    }
  }
}
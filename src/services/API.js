import axios from "axios";

// Définition de l'URL de base de l'API (à adapter selon ton environnement)
const API_URL = "http://localhost:3000";

// Création d'une instance Axios préconfigurée
const API = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor : Ajoute automatiquement le token JWT aux requêtes si disponible
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

export default API;
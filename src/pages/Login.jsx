import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import APIManager from "../services/APIManager";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await APIManager.loginUser(email, password);
      setMessage(`Connexion réussi : ${response.user.email}`);
      navigate("/");
    } catch (error) {
      setMessage(error.error || "Erreur de connexion");
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Se connecter</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Login;


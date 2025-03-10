import { useState } from "react";
import APIManager from "../services/APIManager";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage(""); // Réinitialise le message avant un nouvel essai
    try {
      const response = await APIManager.registerUser(email, password, passwordConfirmation);
      setMessage(`Inscription réussie : ${response.user.email}`);
    } catch (error) {
      setMessage(error.error || "Erreur lors de l'inscription");
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm the password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
        <button type="submit">S'inscrire</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Register;

import APIManager from "../services/APIManager";


const LogoutButton = () => {
  const handleLogout = async () => {
    try {
      const response = await APIManager.logoutUser();
      window.location.href = "/";
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;

};

export default LogoutButton;
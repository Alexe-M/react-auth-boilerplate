import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import APIManager from "../services/APIManager";
import LogoutButton from "../components/LogoutButton";

const Home = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }


      try {
        const data = await APIManager.getUserData();
        setUser(data.user);
      } catch (error) {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome {user.email} !</h2>
          <LogoutButton />
        </>
      ) : (
        <>
          <h2>Welcome !</h2>
          <p>
            <Link to="/register">Sign in</Link> | <Link to="/login">Login</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Home; 
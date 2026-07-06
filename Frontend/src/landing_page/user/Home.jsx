import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Home = () => {
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        // If no token, redirect back to auth app -- frontend app
        window.location.href = "http://localhost:5173/login";
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3002/api/verify", // <- your backend verify route
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        setUsername(user);

        if (status) {
          toast(`Hello ${user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          window.location.href = "http://localhost:5174/login";
        }
      } catch (err) {
        removeCookie("token");
        window.location.href = "http://localhost:5173/login";
      }
    };

    verifyCookie();
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    // Redirect back to auth app (signup page)
    window.location.href = "http://localhost:5173/signup";
  };

  return (
    <>
      <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { showSuccess, showError } from "../../utils/toast";
import { useAuth } from "../../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { signup } = useAuth();

  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
  });

  const { name, email, username, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !username || !password) {
      showError("All fields are required.");
      return;
    }

    try {
      setLoading(true);

      const data = await signup(inputValue);

      if (data.success) {
        showSuccess(data.message);

        setInputValue({
          name: "",
          email: "",
          username: "",
          password: "",
        });

        setTimeout(() => {
          navigate(from, { replace: true });
        }, 1000);
      } else {
        showError(data.message);
      }
    } catch (err) {
      showError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form_container">
      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>

          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your full name"
            onChange={handleOnChange}
            autoComplete="name"
            required
          />
        </div>

        <div>
          <label>Email</label>

          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            autoComplete="email"
            required
          />
        </div>

        <div>
          <label>Username</label>

          <input
            type="text"
            name="username"
            value={username}
            placeholder="Choose a username"
            onChange={handleOnChange}
            autoComplete="username"
            required
          />
        </div>

        <div>
          <label>Password</label>

          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            autoComplete="new-password"
            required
            minLength={8}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating Account..." : "Signup"}
        </button>

        <span>
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;

import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import "./Auth.css";

const Login = () => {
  const token = localStorage.getItem("token");

  if (token) return <Navigate to="/" />;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleLogin() {
    try {
      const data = await login(email, password);

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  }

  return (
    <div className="_authWrapper">
      <div className="_authHeader">
        <h2>Welcome back</h2>
        <p>Login to continue</p>
      </div>

      <div className="_authCard">
        <div className="_inputGroup">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="_inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="_authError">{error}</p>}

        <button className="_authButton" onClick={handleLogin}>
          Login
        </button>

        <div className="_authFooter">
          <span>Don't have an account?</span>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
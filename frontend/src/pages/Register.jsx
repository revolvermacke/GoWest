import { useState } from "react";
import { useNavigate, Navigate, Link } from "react-router-dom";
import { register } from "../api/authApi";
import "./Auth.css";

const Register = () => {
  const token = localStorage.getItem("token");

  if (token) return <Navigate to="/" />;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleRegister() {
    try {
      const data = await register(email, password);

      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      setError("Registration failed");
    }
  }

  return (
    <div className="_authWrapper">
      <div className="_authHeader">
        <h2>Create account</h2>
        <p>Register to start buying tickets</p>
      </div>

      <div className="_authCard">
        <div className="_inputGroup">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="_inputGroup">
          <label>Password</label>
          <input
            type="password"
            placeholder="Create password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && <p className="_authError">{error}</p>}

        <button className="_authButton" onClick={handleRegister}>
          Register
        </button>

        <div className="_authFooter">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
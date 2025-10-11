import React, { useState } from "react";
import "./assets/styles.css";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:8080/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, password, role }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("User registered successfully:", data);
        navigate("/");
      } else {
        throw new Error(data.error || "Registration failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="glass-container">
      <div className="glass-card">
        <h1 className="glass-title">🚀 Create Your Account</h1>
        <p className="glass-subtitle">Join us and explore amazing features</p>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSignUp} className="glass-form">
          <div className="form-group">
            <input
              id="username"
              type="text"
              placeholder="👤 Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="glass-input"
            />
          </div>

          <div className="form-group">
            <input
              id="email"
              type="email"
              placeholder="📧 Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="glass-input"
            />
          </div>

          <div className="form-group">
            <input
              id="password"
              type="password"
              placeholder="🔑 Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="glass-input"
            />
          </div>

          <div className="form-group">
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
              className="glass-input"
            >
              <option value="" disabled>
                🎭 Select Role
              </option>
              <option value="CUSTOMER">Customer</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <button type="submit" className="glass-button">
            Sign Up ✨
          </button>
        </form>

        <p className="glass-footer">
          Already a member?{" "}
          <a href="/" className="glass-link">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
}

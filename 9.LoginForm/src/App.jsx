import { useState } from "react";
import "./App.css";

export default function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Email: ${user.email}\nPassword: ${user.password}`);
  };
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
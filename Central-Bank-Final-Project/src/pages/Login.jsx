import AuthCard from "../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <h2>Login to your Account</h2>

      <label>Username</label>
      <input placeholder="Enter your Username" />

      <label>Password</label>
      <input type="password" placeholder="Enter your password" />

      <button>Login</button>

      <div className="row">
        <div>
          <input type="checkbox" /> Remember Me
        </div>

        <span
          className="link"
          onClick={() => navigate("/forgot")}
        >
          Forgot Password?
        </span>
      </div>
    </AuthCard>
  );
}
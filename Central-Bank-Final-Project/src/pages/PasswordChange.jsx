import AuthCard from "../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function PasswordChange() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <h2>Password Change Required</h2>

      <input type="password" placeholder="Current Password" />
      <input type="password" placeholder="New Password" />
      <input type="password" placeholder="Confirm Password" />

      <button onClick={() => navigate("/success")}>
        Update Password
      </button>
    </AuthCard>
  );
}
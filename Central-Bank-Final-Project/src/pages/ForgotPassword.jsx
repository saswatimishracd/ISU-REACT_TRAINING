import AuthCard from "../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <h2>Forgot Password</h2>

      <p>Enter your Mobile Number</p>

      <input placeholder="Mobile Number" />

      <button onClick={() => navigate("/otp")}>Continue</button>
    </AuthCard>
  );
}
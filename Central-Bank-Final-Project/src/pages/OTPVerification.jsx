import AuthCard from "../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function OTPVerification() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <h2>Verification Code</h2>

      <p>Enter OTP</p>

      <input placeholder="Enter OTP" />

      <button onClick={() => navigate("/change-password")}>
        Continue
      </button>
    </AuthCard>
  );
}
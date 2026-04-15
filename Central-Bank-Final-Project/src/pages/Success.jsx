import AuthCard from "../components/AuthCard";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <AuthCard>
      <h2>Password Changed Successfully!</h2>

      <button onClick={() => navigate("/")}>
        Continue to Login
      </button>
    </AuthCard>
  );
}
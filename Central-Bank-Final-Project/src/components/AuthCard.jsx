import "../styles/auth.css";

export default function AuthCard({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Central_Bank_of_India_logo.svg/2560px-Central_Bank_of_India_logo.svg.png"
          alt="logo"
          className="logo"
        />
        {children}
      </div>

      <div className="footer">
        <span>Terms and Conditions</span>
        <span>Privacy Policy</span>
        <span>CA Privacy Notice</span>
      </div>
    </div>
  );
}
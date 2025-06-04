import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login to Your Account</h2>

        <form>
          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>

        <div className="links-container">
          <Link to="/register" className="link">
            Create Account
          </Link>
          <Link to="/forgot-password" className="link">
            Forgot Password?
          </Link>
        </div>

        <div className="or-divider">OR</div>

        <div className="social-login">
          <a href="http://localhost:5000/api/auth/google" className="google-btn">
            <img
              src="https://developers.google.com/identity/images/g-logo.png"
              alt="Google"
              style={{ width: 20, height: 20 }}
            />
            Login with Google
          </a>

          <a href="http://localhost:5000/api/auth/facebook" className="facebook-btn">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
              alt="Facebook"
            />
            Login with Facebook
          </a>
        </div>
      </div>
    </div>
  );
}

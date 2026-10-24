import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("");

    // Check that both fields have been filled in.
    if (!email.trim() || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      // Authenticate the user using Firebase Authentication.
      await signInWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      // Login successful: redirect to the homepage.
      navigate("/");
    } catch (error) {
      console.error("Login error:", error);

      // Display an appropriate message for common login errors.
      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/invalid-login-credentials" ||
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        setMessage("Incorrect email or password. Please try again.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else if (error.code === "auth/too-many-requests") {
        setMessage("Too many attempts. Please wait and try again.");
      } else {
        setMessage("Unable to log in. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-page">
      <div className="login-decoration login-decoration-one"></div>
      <div className="login-decoration login-decoration-two"></div>

      <div className="login-card">
        <Link to="/" className="login-brand">
          DEV<span>@</span>Deakin
        </Link>

        <div className="login-heading">
          <h1>Welcome Back!</h1>
          <p>Log in to continue to your account.</p>
        </div>

        <form className="login-form" onSubmit={handleLogin}>
          <div className="login-field">
            <label htmlFor="email">Email Address</label>

            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "Logging In..." : "Log In"}
            {!loading && <span aria-hidden="true"> →</span>}
          </button>
        </form>

        {message && (
          <p className="login-message" role="status">
            {message}
          </p>
        )}

        <div className="login-divider">
          <span>NEW HERE?</span>
        </div>

        <p className="login-signup">
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </p>

        <Link to="/" className="login-home">
          ← Back to Home
        </Link>
      </div>

      <p className="login-footer-text">
        DEV@Deakin · Learn, build and grow.
      </p>
    </main>
  );
}

export default Login;
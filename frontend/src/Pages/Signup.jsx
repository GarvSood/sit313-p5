import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../Firebase";
import "./Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Your password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Your passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      // Create the account in Firebase Authentication.
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email.trim(),
        password
      );

      const user = userCredential.user;

      // Save the user's name to their Firebase profile.
      await updateProfile(user, {
        displayName: name.trim(),
      });

      // Store the user's basic details in Firestore.
      await setDoc(doc(db, "users", user.uid), {
        name: name.trim(),
        email: email.trim(),
        createdAt: new Date().toISOString(),
      });

      setMessage("Account created successfully!");

      // Redirect to the login page.
      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.error("Signup error:", error);

      if (error.code === "auth/email-already-in-use") {
        setMessage("This email is already registered. Please log in.");
      } else if (error.code === "auth/invalid-email") {
        setMessage("Please enter a valid email address.");
      } else if (error.code === "auth/weak-password") {
        setMessage("Please choose a stronger password.");
      } else if (error.code === "permission-denied") {
        setMessage(
          "Could not save your details. Please check your Firestore rules."
        );
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signup-page">
      <div className="signup-card">
        <Link to="/" className="signup-brand">
          DEV<span>@</span>Deakin
        </Link>

        <div className="signup-heading">
          <h1>Create your account</h1>
          <p>Join the community and get started.</p>
        </div>

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-field">
            <label htmlFor="signup-name">Full Name</label>

            <input
              id="signup-name"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="signup-field">
            <label htmlFor="signup-email">Email Address</label>

            <input
              id="signup-email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="signup-field">
            <label htmlFor="signup-password">Password</label>

            <input
              id="signup-password"
              type="password"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <div className="signup-field">
            <label htmlFor="signup-confirm">Confirm Password</label>

            <input
              id="signup-confirm"
              type="password"
              placeholder="Enter your password again"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              autoComplete="new-password"
              minLength={8}
              required
            />
          </div>

          <button
            type="submit"
            className="signup-button"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {message && (
          <p className="signup-message" role="status">
            {message}
          </p>
        )}

        <p className="signup-login">
          Already have an account?{" "}
          <Link to="/login">Log in</Link>
        </p>

        <Link to="/" className="signup-home">
          ← Back to Home
        </Link>
      </div>
    </main>
  );
}

export default Signup;
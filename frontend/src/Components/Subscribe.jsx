import { useState } from "react";
import "./Subscribe.css";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage("Please enter your email address.");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Subscription failed");
      }

      setMessage("Thanks for subscribing!");
      setEmail("");
    } catch (error) {
      console.error("Subscription error:", error);
      setMessage("Unable to subscribe right now. Please try again.");
    }
  };

  return (
    <section id="subscribe" className="subscribe-section">
      <div className="subscribe-container">
        <h2>Subscribe</h2>

        <p className="subscribe-description">
          Sign up for my daily insider.
        </p>

        <form className="subscribe-form" onSubmit={handleSubscribe}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            required
          />

          <button type="submit">Subscribe</button>
        </form>

        {message && (
          <p className="subscribe-message" role="status">
            {message}
          </p>
        )}
      </div>
    </section>
  );
}

export default Subscribe;
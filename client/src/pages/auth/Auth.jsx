import React, { useState } from "react";
import "./style.css";

function Auth() {
  const [name, setName] = useState("");
  const [showWelcome, setShowWelcome] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setShowWelcome(true);
    setTimeout(() => {
      window.location.href = "/home";
    }, 2000);
  };

  const getFirstName = () => {
    const firstName = name.split(" ")[0];
    return firstName;
  };

  return (
    <div className="auth-container">
      {showWelcome ? (
        <div className="welcome-message">Welcome {getFirstName()}!</div>
      ) : (
        <div className="login-container">
          <div className="form-container">
            <form onSubmit={handleLogin}>
              <h1>Sign In</h1>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
              <label>username</label>
              <button type="submit">Sign In</button>
            </form>
          </div>
          <div className="desc-container">
            <div className="desc">
              <div className="desc-panel">
                <span className="material-symbols-outlined tv">
                  live_tv
                </span>
                <h2>MovieBox AI</h2>
                <p>` Using AI to get the Best Movies for You</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Auth;
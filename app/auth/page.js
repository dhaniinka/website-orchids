"use client";

import { useState } from "react";
import '../../styles/auth.css';

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className={`container ${isSignUp ? "active" : ""}`}>
      {/* Sign In Form */}
      <div className="form-container sign-in-container">
        <h2>Sign In</h2>
        <div className="social-icons">
          <div>f</div>
          <div>G</div>
          <div>in</div>
        </div>
        <p>Or use your account</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <button>Sign In</button>
      </div>

      {/* Sign Up Form */}
      <div className="form-container sign-up-container">
        <h2>Sign Up</h2>
        <div className="social-icons">
          <div>f</div>
          <div>G</div>
          <div>in</div>
        </div>
        <p>Or use your account</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Sign Up</button>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <h1>{isSignUp ? "Hello, Friends" : "Create your Account"}</h1>
        <p dangerouslySetInnerHTML={{__html: isSignUp ? "Sudah punya akun?<br>Masuk di sini" : "Belum punya akun?<br>Daftar sekarang"}} />
        <button onClick={toggleForm}>{isSignUp ? "Sign In" : "Sign Up"}</button>
      </div>
    </div>
  );
}

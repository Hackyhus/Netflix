import React from "react";
import { useState } from "react";
import "./Login.css";
import logo from "../../assets/logo.png";
import { signin, signup } from "../../firebase";
import netflix_spinner from '../../assets/netflix_spinner.gif';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const user_auth = async (event) => {
   
    event.preventDefault(); // prevent page refresh
   setLoading(true);
    if (signState === "Sign In") {

      await signin(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoading(false);
  };

  return (
    loading ? <div className="loading"><img src={netflix_spinner} alt=""/> </div> :
    <div className="login">
      <img src={logo} className="login-logo" alt="" />
      <div className="login-form">
        <form className="login-form">
          <h1>{signState}</h1>
          {signState === "Sign Up" ? (
            <div className="input-group">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                required
              />
            </div>
          ) : (
            <div></div>
          )}
          <div className="input-group">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input-group">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" onClick={user_auth} className="login-button">
            {signState}
          </button>
          <div className="login-help">
            <div>
              <input
                type="checkbox"
                className="cyberpunk-checkbox"
                id="remember-me"
                required
              />
              <label htmlFor="remember-me" className="cyberpunk-checkbox-label">
                {" "}
                Remember me{" "}
              </label>
            </div>
            <a href="#"> Need help?</a>
            <div className="help-hover">
              <p>need any help with any specific shit</p>
            </div>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up now.
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In now.
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

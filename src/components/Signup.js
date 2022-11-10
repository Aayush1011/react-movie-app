import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// Components
import Button from "./Button";
// Styles
import { Wrapper } from "./Login-Signup.styles";
// Context
import { Context } from "../context";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [ratingUser, setRatingUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });
      setRatingUser({ email, ratings: [] });
      navigate("/");
    } catch (error) {
      setError(true);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    if (name === "confirm-password") setConfirmPassword(value);
    if (name === "username") setUsername(value);
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
      <input
        type="text"
        value={username}
        name="username"
        placeholder="Username"
        onChange={handleInput}
      />
      <input
        type="email"
        value={email}
        name="email"
        placeholder="Email"
        onChange={handleInput}
      />
      <input
        type="password"
        value={password}
        name="password"
        placeholder="Password"
        onChange={handleInput}
      />
      <input
        type="password"
        value={confirmPassword}
        name="confirm-password"
        placeholder="Confirm Password"
        onChange={handleInput}
      />
      <Button text="Sign Up" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Signup;

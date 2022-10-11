import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";
// Components
import Button from "./Button";
// Styles
import { Wrapper } from "./Login-Signup.styles";
// Context
import { Context } from "../context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [ratingUser, setRatingUser] = useContext(Context);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    setError(false);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const docSnap = await getDoc(doc(db, "movies", email));
      if (docSnap.exists()) {
        setRatingUser(docSnap.data());
      } else {
        setRatingUser({ email, ratings: [] });
      }
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
  };

  return (
    <Wrapper>
      {error && <div className="error">There was an error!</div>}
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
      <Button text="Login" callback={handleSubmit} />
    </Wrapper>
  );
};

export default Login;

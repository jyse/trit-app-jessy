import React, { useEffect } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import {
  selectUserName,
  setSignOutState,
  setUserLoginDetails,
} from "../features/userSlice";
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import logo from "../images/trit-logo.png";
import "./Login.css";

function Login() {
  const userName = useSelector(selectUserName);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        history.push("/home");
      }
    });
  }, [userName]);

  const handleAuth = () => {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          history.push("/");
        })
        .catch((err) => alert(err.message));
    }
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        photo: user.photoURL,
      })
    );
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src={logo} alt="logo" />
        <div className="login__text">
          <h1> Sign in to Team Rockstars IT</h1>
        </div>
        <Button type="submit" onClick={handleAuth}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;

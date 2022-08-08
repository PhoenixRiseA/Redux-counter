import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef } from "react";

const Auth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLogin);
  const emailRef = useRef();
  const passwordRef = useRef();
  const loginHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAfEMJNUWanJky-jYSDG0n0CpMrB2rKz04",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.idToken);
        dispatch(authActions.login(data.idToken, enteredEmail));
      })
      .catch((err) => {
        console.log(err.message);
      });
    console.log("in login");
  };

  return (
    <main className={classes.auth}>
      {!isLogin && (
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" ref={emailRef} />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" ref={passwordRef} />
            </div>
            <button onClick={loginHandler}>Login</button>
          </form>
        </section>
      )}
      {isLogin && <h1>My user profile</h1>}
    </main>
  );
};

export default Auth;

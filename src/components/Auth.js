import classes from "./Auth.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/index";

const Auth = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.isAuthenticated);
  console.log(isLogin);
  const loginHandler = (e) => {
    e.preventDefault();
    console.log("in login");
    dispatch(authActions.login());
  };

  return (
    <main className={classes.auth}>
      {!isLogin && (
        <section>
          <form>
            <div className={classes.control}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className={classes.control}>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" />
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

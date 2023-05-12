import React, { useContext } from "react";
import UseForm from "../Hooks/UseForm";
import Input from "../Tools/Input";
import Head from "../../Head";
import styles from "./Login.module.css";
import LoginBackground from "../../img/login-background.jpg";
import UserContext from "../../UserContext";
import Error from "../Tools/Error";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const { userLogin, error, loading, login } = useContext(UserContext);
  const username = UseForm();
  const password = UseForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    userLogin(username.value, password.value);
  };

  if (login === true) return <Navigate to="/myaccount" />;

  return (
    <section className={styles.containerLogin}>
      <Head title="Login" />
      <div className={styles.img}>
        <img src={LoginBackground} alt="LoginPage gym background" />
      </div>
      <form className={styles.formLogin} onSubmit={handleSubmit}>
        <h1>ACCOUNT LOGIN</h1>
        <hr />
        <div className={styles.inputAreaLogin}>
        <Input type="text" placeholder="Username" name="username" {...username} />
        <Input type="password" placeholder="Password" name="username" {...password} />
        </div>
        <span>Don't have an account? <Link to={'/register'}>Sign up</Link></span>
        {loading ? (
          <button disabled>Sign in...</button>
        ) : (
          <button>Sign in</button>
        )}
        {error && <Error error={error} />}
      </form>
    </section>
  );
};

export default Login;

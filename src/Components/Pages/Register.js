import React, { useState } from "react";
import styles from "./Register.module.css";
import Head from "../../Head";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Tools/Input";
import UseForm from "../Hooks/UseForm";
import { USER_POST } from "../../Api";
import UseFetch from "../Hooks/UseFetch";
import Error from "../Tools/Error";

const Register = () => {
  const firstName = UseForm();
  const secondName = UseForm();
  const username = UseForm();
  const password = UseForm();
  const email = UseForm();
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const { request, loading, error } = UseFetch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username.value,
      email: email.value,
      password: password.value,
      firstName: firstName.value,
      secondName: secondName.value,
    };

    const { url, options } = USER_POST(user);
    const { response } = await request(url, options);
    if (response.ok) {
      setMessage(true);
      navigate("/login");
    }
  };

  return (
    <section className={styles.register__content}>
      <Head title="Register" />
      <form onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <div className={styles.register__namespot}>
          <div>
            <label>First Name</label>
            <Input
              type="text"
              placeholder="Enter your First name"
              {...firstName}
            />
          </div>
          <div>
            <label>Last Name</label>
            <Input
              type="text"
              placeholder="Enter your Last name"
              {...secondName}
            />
          </div>
        </div>

        <label>Username</label>
        <Input type="text" placeholder="Enter Your Username" {...username} />

        <label>Email</label>
        <Input type="email" placeholder="Enter Your Username" {...email} />

        <label>Password</label>
        <Input type="password" placeholder="Enter Password" {...password} />

        <span>
          have an account?
          <Link to="/login">Sign in</Link>
        </span>

        {loading ? (
          <button disabled>REGISTER...</button>
        ) : (
          <button>REGISTER</button>
        )}
      </form>
      <Error error={error} />
      {message && <p style={{ color: "green" }}>User has been registered</p>}
    </section>
  );
};

export default Register;

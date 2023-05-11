import React, { useState } from "react";
import styles from "./Register.module.css";
import Head from "../../Head";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Tools/Input";
import UseForm from "../Hooks/UseForm";
import { USER_POST } from "../../Api";
import UseFetch from "../Hooks/UseFetch";
import Error from "../Tools/Error";
import registerBackground from '../../img/gym_entrance.jpg'
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
      <img src={registerBackground}  alt="Gym entrance background"/>
      <form onSubmit={handleSubmit}>
        <h1>CREATE ACCOUNT</h1>
        <hr />
        <div className={styles.register__namespot}>
          <div>
            <Input
              type="text"
              placeholder="Enter your First name"
              {...firstName}
            />
          </div>
          <div>
            <Input
              type="text"
              placeholder="Enter your Last name"
              {...secondName}
            />
          </div>
        </div>
        <Input type="text" placeholder="Username" {...username} />
        <Input type="email" placeholder="Enter Your Email" {...email} />
        <Input type="password" placeholder="Password" {...password} />
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

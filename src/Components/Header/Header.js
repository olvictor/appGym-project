import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { CgGym } from "react-icons/cg";
import UserContext from "../../UserContext";
import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  const { data, login } = useContext(UserContext);

  return (
    <nav>
      <div className={styles.logo}>
        <CgGym />
      </div>
      <ul className={styles.list}>
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="training">Training</NavLink>
        </li>
        <li>
          <NavLink to="about">About</NavLink>
        </li>

        <div className={styles.userArea}>
          <NavLink to={login ? "myaccount" : "login"}>
            <p>{data && data.username}</p>
            <FaUserCircle />
          </NavLink>
        </div>
      </ul>
    </nav>
  );
};

export default Header;

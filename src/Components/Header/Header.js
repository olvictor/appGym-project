import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import { CgGym } from "react-icons/cg";
import UserContext from "../../UserContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { data, login,userLogout } = useContext(UserContext);
  const [active, setActive] = useState(false);
  return (
    <nav className={styles.nav}>
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

        <div className={styles.userArea}  onClick={()=>setActive(!active)}>
          <NavLink to={login ? "myaccount" : "login"}>
            <p>{data && data.username}</p>
            <FaUserCircle />
          </NavLink>
          <div className={styles.userNav} style={active ? {display:'block'}: {display:'none'}}>
            <ul>
              <li onClick={userLogout}>Logout</li>
            </ul>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Header;

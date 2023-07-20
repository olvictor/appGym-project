import React, { useContext } from "react";
import styles from "./myAccount.module.css";
import { FiLogOut } from "react-icons/fi";
import { MdAddAPhoto } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { IoIosFitness } from "react-icons/io";
import { HiOutlinePhoto } from "react-icons/hi2";
import UserContext from "../../UserContext";
import { NavLink, Route, Routes } from "react-router-dom";
import User from "./User";
import PhotoPost from "../Pages/PhotoPost";
import Calendary from "./Calendary";
import Galery from "./Galery";
import Exercises from "./Exercises";


const Myaccount = () => {
  const { userLogout, login } = useContext(UserContext);
  if (!login) return null;
  return (
    <section className={styles.myAccount}>
      <nav className={styles.navbar}>
        <ul>
          <NavLink to={"/myaccount/user"} end>
            <li>
              <CiUser />
              <span>User</span>
            </li>
          </NavLink>
          <NavLink to={"/myaccount/exercises"}>
            <li>
              <IoIosFitness />
              <span>Exercícios</span>
            </li>
          </NavLink>
          <NavLink to={"/myaccount/calendary"}>
            <li>
              <BsFillCalendarCheckFill />
              <span>Calendário</span>
            </li>
          </NavLink>
          <NavLink to={"/myaccount/galery"}>
            <li>
              <HiOutlinePhoto />
              <span>Galeria</span>
            </li>
          </NavLink>
          <NavLink to={"/myaccount/photoPost"}>
            <li>
              <MdAddAPhoto />
              <span>Postar Foto</span>
            </li>
          </NavLink>
          {/* <li onClick={userLogout}>
            <FiLogOut />
            <span>Logout</span>
          </li> */}
        </ul>
      </nav>
      <Routes>
        <Route path="user" element={<User />}></Route>
        <Route path="PhotoPost" element={<PhotoPost />}></Route>
        <Route path="Calendary" element={<Calendary />}></Route>
        <Route path="Galery" element={<Galery />}></Route>
        <Route path="Exercises" element={<Exercises />}></Route>
      </Routes>
    </section>
  );
};

export default Myaccount;

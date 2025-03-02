import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import LowerHeader from "./lowerHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <nav>
      <div className={styles.header__container}>
        <div className={styles.logo__container}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={styles.delivery}>
          <span>
            <SlLocationPin />
          </span>
          <div>
            <p>Delivered to</p>
            <span>Ethiopia</span>
          </div>
        </div>
        <div className={styles.search}>
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" name="" id="" placeholder="Search Products" />
          <BsSearch size={45} />
        </div>
        <div>
          <div className={styles.order__container}>
            <Link to="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </Link>
            <Link to="/signup">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </Link>
            <Link to="/orders">
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            <Link to="/cart" className={styles.cart}>
              <BiCart size={35} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </div>
      <LowerHeader />
    </nav>
  );
}

export default Header;

import React from "react";
import styles from "./Header.module.css";
import LowerHeader from "./lowerHeader"
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/Images/logo.png";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";

function Header() {
  return (
    <nav>
      <div className={styles.header__container}>
        <div className={styles.logo__container}>
          <a href="#">
            <img src={logo} alt="" />
          </a>
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
            <a href="" className={styles.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                alt=""
              />
              <section>
                <option value="">EN</option>
              </section>
            </a>
            <a href="">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            <a href="">
              <div>
                <p>Returns</p>
                <span>& Orders</span>
              </div>
            </a>
            <a href="" className={styles.cart}>
              <BiCart size={35}/>
              <span>0</span>
            </a>
          </div>
        </div>
      </div>
        <LowerHeader/>  
    </nav>
  );
}

export default Header;

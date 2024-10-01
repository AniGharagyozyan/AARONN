// import {FC} from "react";
import image from "../assets/Brand-logo.png";
import styles from "./header.module.css";

export default function header() {
  return (
    <>
      <div className={styles.nav}>
        <img className={styles.headerImg} src={image} />
        <div className={styles.navText}>
          <div>
            <a href="@">HOME</a>
          </div>
          <div>
            <a href="@">ABOUT ME</a>
          </div>
          <div>
            <a href="@">MY WORKS</a>
          </div>
          <div>
            <a href="@">CONTACT</a>
          </div>
        </div>
      </div>
    </>
  );
}
// import { FC } from "react";
import styles from "./footer.module.css";
import Logo from "../assets/bigLogo.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function footer() {
  return (
    <>
      <div className={styles.bg}>
        <div className={styles.text}>Get in Touch With Us</div>
        <div className={styles.textMail}>
          <a className={styles.link} href="#">
            info@aaronn.com
          </a>
        </div>
        <div className={styles.footerText}>
          <div className={styles.imgLogo}>
            <img src={Logo} />
          </div>
          <div style={{ color: "#fff", paddingTop: "284px" }}>
            <div style={{ fontSize: "24px" }}>
              Street Avenue 21, CA <br />
              0-8-00-888- <br />
              000
            </div>
            <div>
              <div style={{ paddingLeft: "900px", fontSize: "24px" }}>
                +9 0283353
                <div className={styles.icons}>
                  <a href="@">
                    <FaFacebookSquare />
                  </a>
                  <a href="@">
                    <FaTwitterSquare />
                  </a>
                  <a href="@">
                    <FaInstagramSquare />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerBorder}></div>
        <div className={styles.footerLastText}>
          © 2023. Ideapeel. All rights reserved.
        </div>
      </div>
    </>
  );
}

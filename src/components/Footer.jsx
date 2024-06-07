import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import arrow from "../assets/icons/arrowTop.svg";
import mail from "../assets/icons/mail.svg";
import phone from "../assets/icons/phone.svg";
import map from "../assets/icons/map.svg";

const navbarItems = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/team",
    name: "Team",
  },
  {
    link: "/process",
    name: "Process",
  },
  {
    link: "/pricing",
    name: "Pricing",
  },
  {
    link: "/blog",
    name: "Blog",
  },
  {
    link: "/contact",
    name: "Contact Us",
  },
];

export const Footer = ({ setNavbarHidden }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__top}>
          <div className={styles.content}>
            <Link to="/" onClick={() => setNavbarHidden(true)}>
              <img src={logo} alt="logo" className={styles.content__logo} />
            </Link>

            <div className={styles.content__toTop}>
              <p className={styles.content__toTopText}>Got To Top</p>
              <a href="#header" className={styles.content__toTopLink}>
                <img src={arrow} alt="icon" />
              </a>
            </div>
          </div>

          <nav className={styles.navbar}>
            <ul className={styles.navbar__list}>
              {navbarItems.map((item) => (
                <li key={item.name} className={styles.navbar__item}>
                  <Link
                    to={item.link}
                    className={styles.navbar__link}
                    onClick={() => setNavbarHidden(true)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.contacts}>
            <div className={styles.contacts__item}>
              <img src={mail} alt="icon" className={styles.contacts__icon} />
              <p className={styles.contacts__text}>hello@squareup.com</p>
            </div>

            <div className={styles.contacts__item}>
              <img src={phone} alt="icon" className={styles.contacts__icon} />
              <p className={styles.contacts__text}>+91 91813 23 2309</p>
            </div>

            <div className={styles.contacts__item}>
              <img src={map} alt="icon" className={styles.contacts__icon} />
              <p className={styles.contacts__text}>Somewhere in the World</p>
            </div>
          </div>

          <p className={styles.copyright}>
            © 2023 Nutritionist. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

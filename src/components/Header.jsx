import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import join from "../assets/icons/join.svg";
import arrow from "../assets/icons/arrowRight.svg";
import abstract from "../assets/icons/abstract.svg";
import logo from "../assets/logo.png";
import burger from "../assets/icons/burger.svg";
import close from "../assets/icons/close.svg";

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
];

export const Header = ({ activeLink, navbarHidden, setNavbarHidden }) => {
  return (
    <header className={styles.header} id="header">
      <div className={styles.header__top}>
        <div className={styles.join}>
          <img src={abstract} alt="icon" className={styles.join__bgImg} />

          <div className={styles.join__info}>
            <img src={join} alt="icon" className={styles.join__infoBall} />
            <p className={styles.join__infoText}>
              Join Our Personalized Nutrition Demo For Free
            </p>
            <img src={arrow} alt="icon" className={styles.join__infoArrow} />
          </div>

          <img
            src={abstract}
            alt="icon"
            className={`${styles.join__bgImg} ${styles.join__bgImgRight}`}
          />
        </div>
      </div>

      <div className={styles.header__bottom}>
        <div className={styles.header__bottom_inner}>
          <Link to="/" onClick={() => setNavbarHidden(true)}>
            <img src={logo} alt="logo" className={styles.logo} />
          </Link>

          <nav
            className={
              navbarHidden
                ? styles.navbar
                : `${styles.navbar} ${styles.navbar__open}`
            }
          >
            <ul className={styles.navbar__list}>
              {navbarItems.map((item, index) => (
                <li
                  key={item.name}
                  className={
                    activeLink === index + 1
                      ? `${styles.navbar__item} ${styles.navbar__item_active}`
                      : styles.navbar__item
                  }
                >
                  <Link
                    to={item.link}
                    className={
                      activeLink === index + 1
                        ? `${styles.navbar__link} ${styles.navbar__link_active}`
                        : styles.navbar__link
                    }
                    onClick={() => setNavbarHidden(!navbarHidden)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className={styles.navbar__item}>
                <Link
                  to="/contact"
                  className={styles.navbar__link_button}
                  onClick={() => setNavbarHidden(!navbarHidden)}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <div
            className={styles.burgerButton}
            onClick={() => setNavbarHidden(!navbarHidden)}
          >
            <img
              src={navbarHidden ? burger : close}
              alt="burger"
              className={styles.burgerButton__img}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

import styles from "./FormAndMap.module.scss";
import { Link } from "react-router-dom";
import map from "../../assets/images/map.jpg";
import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import linkedin from "../../assets/icons/linkedin.svg";

export const FormAndMap = () => {
  return (
    <section className={styles.container}>
      <form action="" className={styles.form}>
        <fieldset className={styles.form__fieldset}>
          <div className={styles.form__inputWrapper}>
            <label htmlFor="text" className={styles.form__label}>
              Full Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
              className={styles.form__input}
            />
          </div>

          <div className={styles.form__inputWrapper}>
            <label htmlFor="email" className={styles.form__label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              className={styles.form__input}
            />
          </div>
        </fieldset>

        <label htmlFor="tel" className={styles.form__label}>
          Phone Number
        </label>
        <input
          type="tel"
          name="tel"
          id="tel"
          placeholder="Enter your Number"
          className={styles.form__input}
        />

        <label htmlFor="message" className={styles.form__label}>
          Message
        </label>
        <textarea
          name="message"
          id="message"
          placeholder="Enter your Message"
          rows={5}
          maxLength={250}
          className={styles.form__textarea}
        ></textarea>
        <span className={styles.form__textareaInfo}>Max 250 Chars</span>

        <input
          type="button"
          value="Send Message"
          className={styles.form__button}
        />
      </form>

      <div className={styles.map}>
        <img src={map} alt="map" className={styles.map__image} />

        <div className={styles.social}>
          <Link
            to="https://www.facebook.com"
            target="_blank"
            className={styles.social__link}
          >
            <img
              src={facebook}
              alt="facebook"
              className={styles.social__logo}
            />
          </Link>

          <Link
            to="https://twitter.com"
            target="_blank"
            className={styles.social__link}
          >
            <img src={twitter} alt="twitter" className={styles.social__logo} />
          </Link>

          <Link
            to="https://linkedin.com/"
            target="_blank"
            className={styles.social__link}
          >
            <img
              src={linkedin}
              alt="linkedin"
              className={styles.social__logo}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

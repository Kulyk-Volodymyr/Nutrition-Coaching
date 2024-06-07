import styles from "./Hero.module.scss";
import abstract2 from "../../assets/images/abstract2.png";
import mail from "../../assets/icons/mail.svg";
import phone from "../../assets/icons/phone.svg";
import map from "../../assets/icons/map.svg";

export const Hero = () => {
  return (
    <>
      <section className={styles.hero}>
        <img src={abstract2} alt="icon" className={styles.hero__img} />
        <h1 className={styles.hero__header}>Contact Us</h1>
        <p className={styles.hero__text}>
          We value your feedback, questions, and concerns at Nutritionist. Our
          dedicated team is here to assist you and provide the support you need
          on your nutritional journey. Please don't hesitate to reach out to us
          using any of the following contact methods
        </p>
      </section>

      <section className={styles.contacts}>
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
      </section>
    </>
  );
};

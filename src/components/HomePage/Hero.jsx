import styles from "./Hero.module.scss";
import hero from "../../assets/images/home_page/hero.jpg";
import avatar1 from "../../assets/images/home_page/avatar1.jpg";
import avatar2 from "../../assets/images/home_page/avatar2.jpg";
import avatar3 from "../../assets/images/home_page/avatar3.jpg";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <img src={hero} alt="sports girl" className={styles.hero__imageImg} />
      </div>

      <div className={styles.hero__info}>
        <div className={styles.hero__infoInner}>
          <div className={styles.customers}>
            <div className={styles.customers__avatar}>
              <img
                src={avatar1}
                alt="avatar"
                className={styles.customers__avatarImg}
              />
              <img
                src={avatar2}
                alt="avatar"
                className={`${styles.customers__avatarImg} ${styles.customers__avatarImg_offset}`}
              />
              <img
                src={avatar3}
                alt="avatar"
                className={`${styles.customers__avatarImg} ${styles.customers__avatarImg_offset}`}
              />
            </div>
            <p className={styles.customers__text}>
              <span className={styles.customers__textSpan}>430+</span> Happy
              Customers
            </p>
          </div>

          <div className={styles.info}>
            <p className={styles.info__subtitle}>
              Transform Your ❤️ Health with
            </p>

            <h1 className={styles.info__title}>
              Personalized Nutrition Coaching
            </h1>

            <p className={styles.info__text}>
              Welcome to Nutritionist, your partner in achieving optimal health
              through personalized nutrition coaching. Our certified
              nutritionists are here to guide you on your weight loss journey,
              providing customized plans and ongoing support. Start your
              transformation today and experience the power of personalized
              nutrition coaching.
            </p>

            <div className={styles.info__buttons}>
              <button
                className={`${styles.info__button} ${styles.info__buttonStarter}`}
              >
                Get Starter Today
              </button>
              <button
                className={`${styles.info__button} ${styles.info__buttonBook}`}
              >
                Book a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

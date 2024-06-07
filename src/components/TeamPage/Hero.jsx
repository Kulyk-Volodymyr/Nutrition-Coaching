import styles from "./Hero.module.scss";
import abstract2 from "../../assets/images/abstract2.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={abstract2} alt="icon" className={styles.hero__img} />
      <h1 className={styles.hero__header}>Meet Our Team of Experts</h1>
      <p className={styles.hero__text}>
        Our team at Nutritionist is composed of highly skilled professionals who
        are passionate about helping you achieve your health and wellness goals.
        With a diverse range of expertise in nutrition, coaching, and support,
        our team is dedicated to providing you with the guidance and
        personalized care you need. Get to know the experts behind our success
        and discover how they can make a positive impact on your journey to
        better health.
      </p>
    </section>
  );
};

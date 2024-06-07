import styles from "./Hero.module.scss";
import abstract2 from "../../assets/images/abstract2.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={abstract2} alt="icon" className={styles.hero__img} />
      <h1 className={styles.hero__header}>
        Your Journey to Health and Wellness
      </h1>
      <p className={styles.hero__text}>
        At Nutritionist, we believe in providing a personalized and
        comprehensive approach to help you achieve your health and wellness
        goals. Our "How it Works" process is designed to guide you through each
        step of your journey, ensuring that you receive the support, knowledge,
        and tools you need to succeed. Here's a detailed breakdown of our
        process:
      </p>
    </section>
  );
};

import styles from "./Hero.module.scss";
import abstract2 from "../../assets/images/abstract2.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={abstract2} alt="icon" className={styles.hero__img} />
      <h1 className={styles.hero__header}>Our Pricing</h1>
      <p className={styles.hero__text}>
        At Nutritionist, we offer flexible pricing options to accommodate your
        unique requirements and budget. Our goal is to provide you with
        exceptional personalized nutrition coaching that is accessible and
        tailored to your needs. Choose from our three plans below and take the
        first step towards a healthier lifestyle
      </p>
    </section>
  );
};

import styles from "./Hero.module.scss";
import abstract2 from "../../assets/images/abstract2.png";

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <img src={abstract2} alt="icon" className={styles.hero__img} />
      <h1 className={styles.hero__header}>Our Blogs</h1>
      <p className={styles.hero__text}>
        Welcome to the Blog section of Nutritionist, your trusted source for
        insightful articles, tips, and expert advice on nutrition and wellness.
        Here, we strive to provide you with engaging and informative content
        that will inspire and empower you to make informed decisions about your
        health. Explore our blog to discover a wealth of resources that cover a
        wide range of topics related to nutrition, fitness, and overall
        well-being.
      </p>
    </section>
  );
};

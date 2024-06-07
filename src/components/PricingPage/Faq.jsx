import styles from "./Faq.module.scss";
import { Questions } from "./Questions";
import icon from "../../assets/images/abstract5.png";

export const Faq = () => {
  return (
    <section className={styles.faq}>
      <h2 className={styles.faq__header}>FAQ</h2>

      <p className={styles.faq__text}>
        We address commonly asked questions and provide comprehensive answers to
        help you navigate your way through your nutrition and wellness journey.
      </p>

      <div className={styles.faq__container}>
        <Questions />

        <div className={styles.question}>
          <img src={icon} alt="icon" className={styles.question__icon} />
          <p className={styles.question__title}>Ask your question</p>
          <p className={styles.question__text}>
            Feel Free to Ask questions on anytime
          </p>
          <button className={styles.question__button}>Ask A Question</button>
        </div>
      </div>
    </section>
  );
};

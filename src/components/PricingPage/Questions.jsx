import styles from "./Questions.module.scss";
import { QUESTIONS } from "../../data/pricing_page";

export const Questions = () => {
  return (
    <section className={styles.questions}>
      {QUESTIONS.map((item, index) => (
        <details
          key={item.question.split(" ").join("").slice(0, 8) + index}
          className={styles.questions__item}
        >
          <summary className={styles.questions__title}>{item.question}</summary>
          <p className={styles.questions__answer}>{item.answer}</p>
        </details>
      ))}
    </section>
  );
};

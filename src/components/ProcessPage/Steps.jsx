import styles from "./Steps.module.scss";
import { STEPS } from "../../data/process_steps";

export const Steps = () => {
  return (
    <section className={styles.steps}>
      <h2 className={styles.steps__header}>How It Works</h2>
      <p className={styles.steps__text}>
        We provide a step-by-step guide on how to get started on your journey
        towards better health and nutrition. We are here to simplify the process
        and make it easy for you to navigate our platform and access the
        resources you need to achieve your goals. Here's how it works
      </p>

      <div className={styles.steps__steps}>
        {STEPS.map((step) => (
          <div key={step.id} className={styles.step}>
            <span className={styles.step__number}>{step.id}</span>
            <div className={styles.step__info}>
              <div className={styles.step__header}>
                <img
                  src={step.image}
                  alt="icon"
                  className={styles.step__image}
                />
                <h4 className={styles.step__title}>{step.title}</h4>
              </div>
              <p className={styles.step__text}>{step.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

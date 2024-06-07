import styles from "./PricingPlans.module.scss";
import { useState } from "react";
import { PLANS } from "../../data/pricing_page";

export const PricingPlans = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__buttons}>
        <button
          className={
            monthly
              ? `${styles.pricing__button} ${styles.pricing__buttonActive}`
              : `${styles.pricing__button} ${styles.pricing__buttonNotActive}`
          }
          onClick={() => setMonthly(true)}
        >
          Monthly
        </button>
        <button
          className={
            monthly
              ? `${styles.pricing__button} ${styles.pricing__buttonNotActive}`
              : `${styles.pricing__button} ${styles.pricing__buttonActive}`
          }
          onClick={() => setMonthly(false)}
        >
          Yearly
        </button>
      </div>

      <p className={styles.pricing__sale}>Save 50% on Yearly</p>

      <div className={styles.pricing__plans}>
        {PLANS.map((item) => (
          <div key={item.plan.split(" ").join("")} className={styles.plan}>
            <h3 className={styles.plan__title}>{item.plan}</h3>

            <p className={styles.plan__sale}>Up to 50% off on Yearly Plan</p>

            <div className={styles.plan__info}>
              {item.info.map((i, idx) => (
                <p
                  key={i.split(" ").join("").slice(0, 6) + idx}
                  className={styles.plan__item}
                >
                  {i}
                </p>
              ))}
            </div>

            {item.advice && (
              <p className={styles.plan__advice}>{item.advice}</p>
            )}

            <p className={styles.plan__price}>
              <span className={styles.plan__priceValue}>
                ${monthly ? item.monthlyPrice : item.yearlyPrice}
              </span>
              <span className={styles.plan__pricePeriod}>
                /{monthly ? "month" : "year"}
              </span>
            </p>

            <button className={styles.plan__link}>Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
};

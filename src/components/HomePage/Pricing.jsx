import styles from "./Pricing.module.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PRICES } from "../../data/home_page";

export const Pricing = () => {
  const [monthly, setMonthly] = useState(true);

  return (
    <section className={styles.pricing}>
      <div className={styles.pricing__inner}>
        <h2 className={styles.pricing__header}>Our Pricing</h2>

        <p className={styles.pricing__text}>
          We outline our flexible and affordable options to support you on your
          journey to optimal health and nutrition. We believe that everyone
          deserves access to personalized nutrition guidance and resources
        </p>

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
          {PRICES.map((item) => (
            <div key={item.plan.split(" ").join("")} className={styles.plan}>
              <div>
                <h3 className={styles.plan__title}>{item.plan}</h3>
                <p className={styles.plan__sale}>
                  Up to 50% off on Yearly Plan
                </p>
                <p className={styles.plan__info}>{item.info}</p>
              </div>

              <div>
                <p className={styles.plan__price}>
                  <span className={styles.plan__priceValue}>
                    ${monthly ? item.monthlyPrice : item.yearlyPrice}
                  </span>
                  <span className={styles.plan__pricePeriod}>
                    /{monthly ? "month" : "year"}
                  </span>
                </p>

                <Link to="/pricing" className={styles.plan__link}>
                  Choose Plan
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

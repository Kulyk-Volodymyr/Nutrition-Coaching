import { useEffect } from "react";
import styles from "./Pricing.module.scss";
import { Hero } from "../../components/PricingPage/Hero";
import { PricingPlans } from "../../components/PricingPage/PricingPlans";
import { Table } from "../../components/PricingPage/Table";
import { Faq } from "../../components/PricingPage/Faq";

export const Pricing = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(5);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <PricingPlans />
        <Table />
        <Faq />
      </div>
    </main>
  );
};

import { useEffect } from "react";
import styles from "./Contact.module.scss";
import { Hero } from "../../components/ContactPage/Hero";
import { FormAndMap } from "../../components/ContactPage/FormAndMap";
import { Join } from "../../components/ContactPage/Join";

export const Contact = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(7);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <FormAndMap />
        <Join />
      </div>
    </main>
  );
};

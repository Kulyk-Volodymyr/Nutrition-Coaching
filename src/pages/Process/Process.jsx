import { useEffect } from "react";
import styles from "./Process.module.scss";
import { Hero } from "../../components/ProcessPage/Hero";
import { Steps } from "../../components/ProcessPage/Steps";
import { Join } from "../../components/ProcessPage/Join";

export const Process = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(4);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <Steps />
        <Join />
      </div>
    </main>
  );
};

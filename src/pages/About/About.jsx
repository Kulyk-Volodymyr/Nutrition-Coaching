import { useEffect } from "react";
import styles from "./About.module.scss";
import { Hero } from "../../components/AboutPage/Hero";
import { Story } from "../../components/AboutPage/Story";
import { Achievements } from "../../components/AboutPage/Achievements";
import { Demo } from "../../components/AboutPage/Demo";

export const About = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(2);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <Hero />
        <Story />
        <Achievements />
        <Demo />
      </div>
    </main>
  );
};

import { useEffect } from "react";
import styles from "./Home.module.scss";
import { Hero } from "../../components/HomePage/Hero";
import { Features } from "../../components/HomePage/Features";
import { Blogs } from "../../components/HomePage/Blogs";
import { Testimonials } from "../../components/HomePage/Testimonials";
import { Pricing } from "../../components/HomePage/Pricing";

export const Home = ({ setActiveLink }) => {
  useEffect(() => {
    setActiveLink(1);
  }, []);

  return (
    <main className={styles.main}>
      <Hero />
      <Features />
      <Blogs />
      <Testimonials />
      <Pricing />
    </main>
  );
};

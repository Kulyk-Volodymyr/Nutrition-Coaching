import styles from "./Testimonials.module.scss";
import { TESTIMONIALS } from "../../data/testimonials";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.testimonials__inner}>
        <h2 className={styles.testimonials__header}>Our Testimonials</h2>
        <p className={styles.testimonials__text}>
          Our satisfied clients share their success stories and experiences on
          their journey to better health and well-being.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className={styles.slider}
        >
          {TESTIMONIALS.map((item, index) => (
            <SwiperSlide
              key={item.author.split(" ").join("") + index}
              className={styles.slider__slide}
            >
              <div className={styles.slider__testimonal}>
                <span className={styles.slider__quote}>&#x201C;</span>
                <p className={styles.slider__message}>{item.message}</p>
              </div>
              <div className={styles.slider__author}>
                <img
                  src={item.avatar}
                  alt="avatar"
                  className={styles.slider__avatar}
                />
                <p className={styles.slider__name}>{item.author}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

import React, { version } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/CuisineList.module.css";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import CategoryCard from "./CategoryCard";
import Link from "next/link";
import vn from "../public/images/VN-cat-bg.jpg";
import kr from "../public/images/KR-cat-bg.jpg";
import jp from "../public/images/JP-cat-bg.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CuisineList() {
  const breakpoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  let list = Array(5)
    .fill(1)
    .map((abc, idx) => (
      <SwiperSlide key={idx}>
        <CategoryCard />
      </SwiperSlide>
    ));
  return (
    <React.Fragment>
      <Container className={`${styles.container} mb-5`} fluid>
        <h2 className={`text-center fs-1 ${styles.heading} mb-4 pt-3`}>
          Categories
        </h2>
        <Swiper
          className={`pb-5`}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={breakpoints}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <CategoryCard imgSrc={jp.src} category="Japanese" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard imgSrc={vn.src} category="Vietnamese" />
          </SwiperSlide>
          <SwiperSlide>
            <CategoryCard imgSrc={kr.src} category="Korean" />
          </SwiperSlide>
          {list}
        </Swiper>
      </Container>
    </React.Fragment>
  );
}

export default CuisineList;

import React from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/CuisineList.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CuisineList() {
  let list = Array(10).fill(1).map((abc, idx) => (
    <SwiperSlide key={idx}>
      <Card style={{"color": "black"}}>
        <Card.Img
          variant="top"
          src="https://www.ford.ca/cmslibs/content/dam/brand_ford/en_ca/brand/homepage/brand_gallery/2022/ford_racing_crop_960x540.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg"
        />
        <Card.Body>
          <Card.Title>{idx}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up
            the bulk of the card content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </SwiperSlide>
  ));
  return (
    <Container className={`${styles.container}`} fluid>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
          clickable: true,
          bulletClass: `swiper-pagination-bullet`,
          renderBullet: (index, className) => {
            return `<span class="${className} ${styles.bulletClass}"></span>`;
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {list}
      </Swiper>
    </Container>
  );
}

export default CuisineList;

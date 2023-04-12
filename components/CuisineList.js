import React, { version } from "react";
import { Container } from "react-bootstrap";
import styles from "../styles/CuisineList.module.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";
import vn from "../public/images/VN-cat-bg.jpg";
import kr from "../public/images/KR-cat-bg.jpg";
import jp from "../public/images/JP-cat-bg.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CuisineList() {
  let list = Array(5)
    .fill(1)
    .map((abc, idx) => (
      <SwiperSlide key={idx}>
        <Card className="bg-dark text-white">
          <Card.Img
            src="https://www.ford.ca/cmslibs/content/dam/brand_ford/en_ca/brand/homepage/brand_gallery/2022/ford_racing_crop_960x540.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg"
            alt="Card image"
          />
          <Card.ImgOverlay
            className={`d-flex justify-content-center align-items-center ${styles.darkenImgBg}`}
          >
            <Card.Title className={`fs-3`}>Food Category</Card.Title>
          </Card.ImgOverlay>
        </Card>
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
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <Card className="bg-dark text-white">
              <Card.Img
                src={jp.src}
                alt="Card image"
              />
              <Card.ImgOverlay
                className={`d-flex justify-content-center align-items-center ${styles.darkenImgBg}`}
              >
                <Card.Title className={`fs-3`}>Japanese</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="bg-dark text-white">
              <Card.Img
                src={vn.src}
                alt="Card image"
              />
              <Card.ImgOverlay
                className={`d-flex justify-content-center align-items-center ${styles.darkenImgBg}`}
              >
                <Card.Title className={`fs-3`}>Vietnamese</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="bg-dark text-white">
              <Card.Img
                src={kr.src}
                alt="Card image"
              />
              <Card.ImgOverlay
                className={`d-flex justify-content-center align-items-center ${styles.darkenImgBg}`}
              >
                <Card.Title className={`fs-3`}>Korean</Card.Title>
              </Card.ImgOverlay>
            </Card>
          </SwiperSlide>
          {list}
        </Swiper>
      </Container>
    </React.Fragment>
  );
}

export default CuisineList;

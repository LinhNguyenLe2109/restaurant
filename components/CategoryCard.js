import React from "react";
import Card from "react-bootstrap/Card";
import { SwiperSlide } from "swiper/react";
import styles from "../styles/CategoryCard.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function CategoryCard(props) {
  let defaultLink =
    "https://www.ford.ca/cmslibs/content/dam/brand_ford/en_ca/brand/homepage/brand_gallery/2022/ford_racing_crop_960x540.jpg/_jcr_content/renditions/cq5dam.web.768.768.jpeg";
  let defaultTitle = "Category";
  return (
    <Card className={`bg-dark text-white ${styles.card}`}>
      <Card.Img
        src={props.imgSrc ? props.imgSrc : defaultLink}
        alt="Card image"
        className={`${styles.img}`}
      />
      <Card.ImgOverlay
        className={`d-flex justify-content-center align-items-center ${styles.imgBg}`}
      >
        <Card.Title className={`fs-3`}>
          {props.category ? props.category : defaultTitle}
        </Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

export default CategoryCard;

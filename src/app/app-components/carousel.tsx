"use client";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ShareHtml from "./share-html";
import { useRef } from "react";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ReactCarousel() {
  const carouselRef = useRef<any>(null);
  return (
    <>
      <div ref={carouselRef}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container "
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="w-[800px] h-[400px] border border-[#000]"
          sliderClass="h-full"
        >
          <div className=" bg-[#763148] h-full flex items-center justify-center">
            Item 1
          </div>
          <div className="bg-[#b6a48f] h-full flex items-center justify-center">
            Item 2
          </div>
          <div className="bg-[#874e1e] h-full flex items-center justify-center">
            Item 3
          </div>
          <div className="bg-[#bea180] h-full flex items-center justify-center">
            Item 4
          </div>
        </Carousel>
      </div>
      <ShareHtml target={carouselRef} />
    </>
  );
}

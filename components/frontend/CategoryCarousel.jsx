"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function CategoryCarousel({ products }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      //   deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="px-4"
    >
      {products.map((product, i) => {
        return (
          <div key={i} href="#" className="rounded-lg mr-3">
            <Link href="#">
              <Image
                width={556}
                height={556}
                className="w-full rounded-3xl object-cover border border-purple-300 "
                src={product.imageUrl}
                alt={product.title}
              />
            </Link>
            <Link href="#">
              <h2 className="dark:text-white text-black mt-2 text-center">
                {product.title}
              </h2>
            </Link>
            <div className="flex">
              <p>{product.price}</p>
              <button>Add</button>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

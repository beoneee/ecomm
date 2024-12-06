"use client"
import Image from "next/image";
import { Carousel } from "nuka-carousel";
import banner1 from "@/public/asset/banner1.jpg";
import banner2 from "@/public/asset/banner2.png";
import banner3 from "@/public/asset/banner3.jpg";
import Link from "next/link";

export default function HeroCarousel({banners}) {
  const image = [
    {
      alt: "banner1",
      src: banner1,
    },
    {
      alt: "banner1",
      src: banner1,
    },
  ];
  return (
    <Carousel wrapAround autoplay  className="rounded-md overflow-hidden ">
     {
      banners.map((banner,i) =>{
        return (
          <Link  href={banner.link} key={i} className="w-full h-full">
            <Image
              alt={banner.title}
              src={banner.imageUrl}
              width={712}
              height={384} 
              className="w-full"
            />
          </Link>
        )  // Adjust height as needed
      })
     }
    
    </Carousel>
  );
}

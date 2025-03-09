"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import Image from "next/image";

interface ReviewProps {
  image: string;
}

const reviewList: ReviewProps[] = [
  {
    image: "/BSC.png",
  },
  {
    image: "/BTC.png",
  },

  {
    image: "/USDT.png",
  },
  
];

export const ListCoin = () => {
  return (
    <section id="list-coin" className="max-2xl:py-5 lg:py-5 hp-banner bg-hightlight ">
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="relative w-[80%] sm:w-[90%]  lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent className="">
          {reviewList.map((review) => (
            <CarouselItem
              key={review.image}
              className="basis-1/3"
            >
        <div className="relative w-[100%] h-[51px] bg-hightlight">
            <Image src={review.image} alt="image icon" fill objectFit="contain" className="mix-blend-luminosity"/>
            </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

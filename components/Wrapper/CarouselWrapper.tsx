"use client";

import React from "react";
import { Carousel, CarouselProps } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function CarouselWrapper(
  props: React.HTMLAttributes<HTMLDivElement> & CarouselProps
) {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      {...props}
    >
      {props.children as React.ReactNode}
    </Carousel>
  );
}

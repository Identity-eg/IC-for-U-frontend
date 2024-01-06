import { cn } from "@/lib/utils";
import Styles from "./Hero.module.css";
import Container from "@/components/Utils/Container";
import { buttonVariants } from "../../../components/ui/button";
import Link from "next/link";

import Image from "next/image";
import {
  // Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselWrapper from "@/components/Wrapper/CarouselWrapper";
import { heroImages } from "@/constants/heroImages";

export default function Hero() {
  return (
    <section>
      <CarouselWrapper opts={{ loop: true }}>
        <CarouselContent className="-ml-0">
          {heroImages.map((img, i) => (
            <CarouselItem key={img.id} className="h-[50vh] pl-0">
              <div className="relative">
                <Image
                  alt=""
                  src={img.src}
                  className="h-[50vh] w-full object-cover "
                />
                <div className={Styles.overlay} />
                <Container className=" absolute inset-0 top-1/2 -translate-y-1/2">
                  <h3 className="text-4xl sm:text-6xl font-bold  text-white mb-4 max-w-[20ch]">
                    {img.title}
                  </h3>
                  <p className="text-xl text-white max-w-[50ch] mb-12">
                    {img.description}
                  </p>

                  <Link
                    href="/gates"
                    className={cn([
                      "capitalize ",
                      buttonVariants({ variant: "default" }),
                    ])}
                  >
                    take a tour
                  </Link>
                </Container>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="invisible sm:visible left-8 " />
        <CarouselNext className="invisible sm:visible right-8 " />
        <CarouselDots />
      </CarouselWrapper>

      <div className="bg-primary ">
        <Container className="text-center py-6">
          <h3 className="font-normal text-white">
            Start Your Heath Recovery Vacation{" "}
            <span className="font-bold">Now</span>
          </h3>
        </Container>
      </div>
    </section>
  );
}

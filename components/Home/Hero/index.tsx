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
            <CarouselItem key={img.id} className="h-[50vh] sm:h-[60vh] pl-0">
              <div className="relative">
                <Image
                  alt=""
                  src={img.src}
                  className="h-[50vh] sm:h-[60vh] w-full object-cover"
                  width={1000}
                  height={1000}
                />
                <div className={Styles.overlay} />
                <Container className="flex flex-col absolute inset-0 py-8 sm:py:32 lg:py-60">
                  <h3 className="text-4xl sm:text-6xl font-bold  text-white mb-4 max-w-[35ch]">
                    {img.title}
                  </h3>
                  <p className="text-xl text-white max-w-[75ch] mb-12">
                    {img.description}
                  </p>

                  <Link
                    href="/gates"
                    className={cn([
                      "capitalize self-start",
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
        <CarouselDots className="bottom-6" />
      </CarouselWrapper>

      <div className="bg-primary ">
        <Container className="text-center py-2 sm:py-6">
          <h3 className="font-normal text-white">
            Start Your Heath Recovery Vacation{" "}
            <span className="font-bold">Now</span>
          </h3>
        </Container>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import Styles from "./Hero.module.css";
import Container from "@/components/Utils/Container";
import { buttonVariants } from "../../../components/ui/button";
import Link from "next/link";
import heroImage from "@/assets/images/heroImg.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className={"h-auto relative"}>
        <div className="absolute inset-0">
          <Image
            alt=""
            src={heroImage}
            fill
            className="w-full h-full object-cover"
          />
        </div>
        <div className={Styles.overlay} />
        <Container className="py-32 relative z-[200]">
          <h1 className="text-6xl font-bold  text-white mb-4 max-w-[15ch]">
            The hidden gems for health tourism{" "}
          </h1>
          <p className="text-xl text-white max-w-[50ch] mb-12">
            Health tourism in Egypt is growing in popularity, with the country
            offering a range of medical services and treatments to international
            patients.
          </p>

          <Link
            href="#"
            className={cn([
              "capitalize ",
              buttonVariants({ variant: "default" }),
            ])}
          >
            take a tour
          </Link>
        </Container>
      </div>
      <div className="bg-primary text-center py-6">
        <h3 className="font-normal text-white">
          Start Your Heath Recovery Vacation{" "}
          <span className="font-bold">Now</span>
        </h3>
      </div>
    </section>
  );
}

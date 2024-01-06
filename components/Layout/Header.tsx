import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "../Utils/Container";
import { navLinks } from "@/constants/navLinks";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import LogoIcon from "@/assets/svgs/LogoIcon";
import { DrawerMenu } from "./Menu";

export default function Header() {
  const t = useTranslations("navigation");
  return (
    <nav className="border-b ">
      <Container className="flex justify-between items-center py-4">
        <Link href={"/"}>
          <LogoIcon className="w-60 lg:w-72 text-primary" />
        </Link>
        <nav className="hidden md:flex justify-between items-center gap-10">
          <ul className="flex justify-center items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                className="capitalize font-medium"
                href={link.to}
              >
                {t(link.label)}
              </Link>
            ))}
          </ul>
          <Link
            href="/gates"
            className={cn([
              "capitalize",
              buttonVariants({ variant: "default" }),
            ])}
          >
            take a tour
          </Link>
        </nav>
        <DrawerMenu />
      </Container>
    </nav>
  );
}

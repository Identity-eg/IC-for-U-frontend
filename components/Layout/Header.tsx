import Link from "next/link";
import { useTranslations } from "next-intl";
import Container from "../Utils/Container";
import { navLinks } from "@/constants/navLinks";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import LogoIcon from "@/assets/svgs/LogoIcon";

export default function Header() {
  const t = useTranslations("navigation");
  return (
    <nav className="border-b ">
      <Container className="flex justify-between items-center py-4">
        <div>
          <LogoIcon className="w-20 text-primary" />
        </div>
        <div className="hidden sm:flex justify-between items-center gap-10">
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
        </div>
      </Container>
    </nav>
  );
}

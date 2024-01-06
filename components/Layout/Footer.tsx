import React from "react";
import Container from "../Utils/Container";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import LogoIcon from "@/assets/svgs/LogoIcon";

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <Container className="py-12">
        <div className="flex justify-between items-center pb-8 mb-8 border-b border-white/20 ">
          <div>
            <LogoIcon withWord={false} size={24} className="w-72 text-white" />
          </div>
          <ul className="flex sm:flex-row  flex-col gap-4 capitalize">
            {navLinks.map((link) => (
              <Link href={link.to} key={link.id}>
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex justify-between text-sm font-light text-white/40">
          <span>All Copyright Reserved©2024</span>
          <span>Privacy Policy</span>
        </div>
      </Container>
    </div>
  );
}

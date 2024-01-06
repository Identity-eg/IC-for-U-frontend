"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { navLinks } from "@/constants/navLinks";
import Link from "next/link";
import BurgerIcon from "@/assets/svgs/BurgerIcon";

export function DrawerMenu() {
  const [open, setOpen] = React.useState(false);
  const matches = useMediaQuery("(max-width: 768px)");
  if (!matches) return null;
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <div className="cursor-pointer">
          <BurgerIcon className="text-primary" />
        </div>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Menu</DrawerTitle>
        </DrawerHeader>
        <hr className="shadow" />
        <ul className="flex flex-col gap-4 p-4 mt-2">
          {navLinks.map((link) => (
            <Link key={link.id} href={link.to}>
              <DrawerClose asChild>
                <li className="capitalize hover:text-primary hover:font-semibold hover:pl-2 transition-all duration-300">
                  {link.label}
                </li>
              </DrawerClose>
            </Link>
          ))}
        </ul>
      </DrawerContent>
    </Drawer>
  );
}

import React from "react";
import Link from "next/link";
import Image from "next/image";
import notFoundImage from "@/assets/images/404-2.svg";
import { buttonVariants } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

const PageNotFound = () => {
  const t = useTranslations("pages.notFound");

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center py-20 dark:bg-slate-900">
      <Image width={300} height={300} src={notFoundImage} alt="" />
      <div className="max-w-[546px] mx-auto w-full mt-12">
        <h4 className="text-slate-900 mb-4">{t("title")}</h4>

        <div className="dark:text-white text-base font-normal mb-10">
          {t("description")}
        </div>
      </div>
      <div className="max-w-[300px] mx-auto w-full">
        <Link
          href="/"
          className={cn([buttonVariants({ variant: "default" }), "capitalize"])}
        >
          {t("button")}
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;

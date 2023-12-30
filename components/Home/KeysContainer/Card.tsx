import CheckMark from "@/assets/svgs/CheckMark";
import GoldenKeyIcon from "@/assets/svgs/GoldenKeyIcon";
import PremuimCrownIcon from "@/assets/svgs/PremuimCrownIcon";
import { Button } from "@/components/ui/button";
import { keys } from "@/constants/keys";
import React from "react";

type Key = (typeof keys)[number];

export default function KeysCard({ compare, title, premium, Icon }: Key) {
  return (
    <article className={` relative p-8 border border-slate-300 rounded-md`}>
      {premium && (
        <div className="absolute -z-10 bg-gradient-to-b from-primary/5 top-2 bottom-2 right-2 left-2 rounded-md" />
      )}

      {/* {premium && (
        <div className="absolute bg-white  px-4 top-0 left-1/2 -translate-y-[70%] -translate-x-1/2">
          <PremuimCrownIcon />
        </div>
      )} */}
      <div className="flex w-full justify-center items-center mb-4">
        <Icon />
      </div>

      <h4 className="text-center mb-4">{title}</h4>

      <Button
        className={`w-full mb-4 ${premium ? "" : "text-primary"}`}
        variant={premium ? "default" : "secondary"}
      >
        Select
      </Button>

      {compare.map((el, i) => (
        <div key={i}>
          <p className="text-base text-black/50 font-medium mb-2 capitalize">
            {el.compareTitle}
          </p>
          <ul className="[&>*]:mb-2">
            {el.list.map((li) => (
              <li
                key={li.id}
                className="flex gap-2 justify-start items-start last:mb-6"
              >
                <span className="translate-y-1">
                  <CheckMark />
                </span>
                <span>{li.listName}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  );
}

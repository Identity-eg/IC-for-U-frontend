import Container from "@/components/Utils/Container";
import Image from "next/image";
import React from "react";
import egyptImage from "@/assets/images/egypt.jpg";
import FeatureCard from "./Card";
import { egyptFeatures } from "@/constants/egyptFeatures";

export default function WhyEgypt() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-black">
        <Image
          alt=""
          src={egyptImage}
          
          fill
          className="w-full h-full object-cover"
        />
      </div>
      <Container className="relative py-24 z-30">
        <h2 className="mb-2 text-white">Why Egypt?</h2>
        <p className="text-white mb-20">
          In line with Egypt Vision 2023, Localization and accreditation plan
          for pharmaceutical industry (medicine, medical devices, biological
          products), led to availability of diversity of high-quality safe
          products offered at low cost. Moreover, fantastic vacation
          destinations to relieve pre-and post-treatment stress.
        </p>
        <div
          style={{ gridTemplateColumns: "repeat(auto-fit,minmax(325px, 1fr))" }}
          className="grid gap-8"
        >
          {egyptFeatures.map((feature) => (
            <FeatureCard key={feature.id} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
}

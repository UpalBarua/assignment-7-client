import { FeaturedDonations } from "@/components/featured-donations";
import { Gallery } from "@/components/gallery";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { SupportingBrands } from "@/components/supporting-brands";
import { Testimonials } from "@/components/testimonials";
import { WhatWeOffer } from "@/components/what-we-offer";

export function Home() {
  return (
    <main className="space-y-[min(25dvw,_8rem)]">
      <Hero />
      <FeaturedDonations />
      <Testimonials />
      <Gallery />
      <WhatWeOffer />
      <SupportingBrands />
      <Newsletter />
    </main>
  );
}

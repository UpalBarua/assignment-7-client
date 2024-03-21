import { Button } from "@/components/ui/button";
import { m } from "framer-motion";

export function Hero() {
  return (
    <section className="container max-w-7xl py-6 md:py-8 md:gap-x-10 mx-auto px-4 grid grid-cols-1 md:grid-cols-2">
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.125 }}
        className="space-y-4 md:space-y-6"
      >
        <h1 className="font-bold tracking-tight text-[min(12dvw,_3.5rem)] capitalize leading-[1.125]">
          Your generosity brings hope to those who need it most!
        </h1>
        <p className="text-foreground/60 md:max-w-[80%] leading-relaxed">
          We strive to help many, supported by a dedicated team. Donations fuel
          our impact, bringing us joy. Thank you for your support.
        </p>
        <div className="flex items-center gap-x-2">
          <Button>Donate Now</Button>
          <Button variant="secondary">Learn More</Button>
        </div>
      </m.div>
      <m.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.25 }}
        className="hidden md:block rounded-md"
        src="/hero-img.jpg"
        alt="hero image"
      />
    </section>
  );
}

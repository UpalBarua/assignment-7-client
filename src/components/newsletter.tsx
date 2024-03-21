import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Newsletter() {
  const { ref, inView } = useInView();

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
      className="max-w-4xl py-8 sm:py-10 md:py-12 lg:py-14 space-y-4 flex flex-col items-center justify-center text-center mx-auto px-4 container bg-primary rounded-md shadow-md border border-foreground/10"
    >
      <h2 className="text-background tracking-tight font-bold text-3xl md:text-4xl">
        Join Our Newsletter!
      </h2>
      <p className="text-background/80 max-w-prose leading-relaxed pb-2">
        Stay updated on our latest donation campaigns, impactful stories, and
        opportunities to contribute. Join our community and be part of the
        change. Subscribe now!
      </p>
      <div className="flex w-full max-w-[28rem]">
        <Input
          className="bg-secondary rounded-tr-none rounded-br-none focus-visible:ring-0 focus-visible:ring-offset-0"
          placeholder="example@email.com"
        />
        <Button variant="secondary" className="rounded-tl-none rounded-bl-none">
          Subscribe
        </Button>
      </div>
    </m.section>
  );
}

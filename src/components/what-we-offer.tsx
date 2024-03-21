import { offerings } from "@/config";
import { useInView } from "react-intersection-observer";
import { m } from "framer-motion";

export function WhatWeOffer() {
  const { ref, inView } = useInView();

  return (
    <m.section
      className="container max-w-7xl mx-auto px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
    >
      <h2 className="font-bold tracking-tight text-[min(8dvw,_3rem)] pb-6 md:pb-8 capitalize">
        What We Offer?
      </h2>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
        {offerings.map(({ Icon, title, content }) => (
          <li
            key={title}
            className="bg-secondary border border-foreground/10 flex flex-col rounded-md lg:p-6 p-4 space-y-4"
          >
            <p className="leading-relaxed text-foreground/80 flex-1">
              {content}
            </p>
            <div className="flex items-center gap-x-2 text-foreground/60">
              <Icon />
              <h3>{title}</h3>
            </div>
          </li>
        ))}
      </ul>
    </m.section>
  );
}

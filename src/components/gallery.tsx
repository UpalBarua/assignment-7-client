import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heading } from "./ui/heading";

export function Gallery() {
  const { ref, inView } = useInView();

  return (
    <m.section
      className="max-w-7xl mx-auto px-4 rounded-md container"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
    >
      <Heading>Our Latest Campaigns</Heading>
      <Carousel
        className="w-full rounded-md"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, i) => (
            <CarouselItem key={i}>
              <img
                className="w-full rounded-md h-[40rem] ojbect-center object-cover border border-foreground/10"
                src={`https://source.unsplash.com/random/100${i}x100${i}/?donate`}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </m.section>
  );
}

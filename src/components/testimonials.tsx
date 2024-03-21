import { testimonials } from "@/config";
import { Heading } from "./ui/heading";
import { useInView } from "react-intersection-observer";
import { m } from "framer-motion";

export function Testimonials() {
  const { ref, inView } = useInView();

  return (
    <m.section
      className="container max-w-7xl px-4 mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
    >
      <Heading>Our Top Donners!</Heading>
      <ul className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {testimonials.map(({ name, image, review }) => (
          <li
            key={name}
            className="bg-secondary flex flex-col p-4 md:p-6 border border-foreground/10 rounded-md shadow-md"
          >
            <p className="leading-relaxed flex-1 text-foreground/80">
              {review}
            </p>
            <div className="flex items-center pt-6 gap-x-4">
              <img
                src={image}
                alt={name}
                className="w-10 h-10 rounded-full object-center object-cover border border-foreground/20"
              />
              <h3 className="text-medium text-foreground">{name}</h3>
            </div>
          </li>
        ))}
      </ul>
    </m.section>
  );
}

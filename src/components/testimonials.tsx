import { useGetTestimonialsQuery } from "@/redux/api/api";
import { Testimonial } from "@/types";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TestimonialCard } from "./testimonial-card";
import { Heading } from "./ui/heading";

export function Testimonials() {
  const { data: testimonials, isLoading } = useGetTestimonialsQuery("");
  const { ref, inView } = useInView();

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
        {testimonials
          ?.slice(0, 6)
          .map((testimonial: Testimonial) => (
            <TestimonialCard key={testimonial._id} {...testimonial} />
          ))}
      </ul>
    </m.section>
  );
}

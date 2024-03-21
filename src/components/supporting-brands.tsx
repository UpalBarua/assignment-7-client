import { brands } from "@/config";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Heading } from "./ui/heading";

export function SupportingBrands() {
  const { ref, inView } = useInView();

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
      className="max-w-7xl mx-auto px-4 contianer"
    >
      <Heading>Our Supporting Partners</Heading>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
        {brands.map((brand) => (
          <li key={brand} className="flex items-center justify-center">
            <img src={brand} alt="brand logo" />
          </li>
        ))}
      </ul>
    </m.section>
  );
}

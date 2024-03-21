import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { useGetDonationQuery } from "@/redux/api/api";
import { DonationPost } from "@/types";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { DonationCard } from "./donation-card";
import { m } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function FeaturedDonations() {
  const { data: donations } = useGetDonationQuery(undefined);

  const { ref, inView } = useInView();

  return (
    <m.section
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.5 }}
      ref={ref}
      className="max-w-7xl container mx-auto px-4"
    >
      <Heading>Donate Now</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {donations
          ?.slice(0, 6)
          .map((donation: DonationPost) => (
            <DonationCard key={donation._id} {...donation} />
          ))}
      </div>
      <div className="flex tems-center justify-center">
        <Link
          to="/donations"
          className={buttonVariants({
            variant: "secondary",
            size: "lg",
            className: "mt-8",
          })}
        >
          <span>View All</span>
          <ChevronRight />
        </Link>
      </div>
    </m.section>
  );
}

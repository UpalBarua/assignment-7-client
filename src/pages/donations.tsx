import { DonationCard } from "@/components/donation-card";
import { Heading } from "@/components/ui/heading";
import { useGetDonationQuery } from "@/redux/api/api";
import type { DonationPost } from "@/types";

export function Donations() {
  const { data: donations, isLoading } = useGetDonationQuery(undefined);

  if (isLoading) {
    <p>Loading...</p>;
  }

  return (
    <section className="max-w-7xl container mx-auto px-4">
      <Heading>Donate Now</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {donations?.map((donation: DonationPost) => (
          <DonationCard key={donation._id} {...donation} />
        ))}
      </div>
    </section>
  );
}

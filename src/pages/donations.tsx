import { DonationCard } from "@/components/donation-card";
import { Heading } from "@/components/ui/heading";
import { PageLoader } from "@/components/ui/page-loader";
import { useGetDonationQuery } from "@/redux/api/api";
import type { DonationPost } from "@/types";

export function Donations() {
  const { data: donations, isLoading } = useGetDonationQuery("");

  if (isLoading) return <PageLoader />;

  return (
    <section className="max-w-7xl container mx-auto px-4 pt-[max(1rem,_2.5dvw)]">
      <Heading className="text-center">Donation Programs</Heading>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {donations?.map((donation: DonationPost) => (
          <DonationCard key={donation._id} {...donation} />
        ))}
      </div>
    </section>
  );
}

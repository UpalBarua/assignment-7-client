import { GratitudeDialog } from "@/components/gratitude-dialog";
import { TestimonialCard } from "@/components/testimonial-card";
import { Heading } from "@/components/ui/heading";
import { useGetTestimonialsQuery } from "@/redux/api/api";
import { Testimonial } from "@/types";
import { useState } from "react";

export function Testimonials() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { data: testimonials, isLoading } = useGetTestimonialsQuery("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="max-w-7xl container mx-auto px-4">
      <Heading className="text-center">Testimonials</Heading>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials?.map((testimonial: Testimonial) => (
          <TestimonialCard key={testimonial._id} {...testimonial} />
        ))}
      </ul>
      <GratitudeDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </section>
  );
}

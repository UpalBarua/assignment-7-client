import type { Testimonial } from "@/types";

export function TestimonialCard({ name, image, review }: Testimonial) {
  return (
    <li
      key={name}
      className="bg-secondary flex flex-col p-4 md:p-6 border border-foreground/10 rounded-md shadow-md"
    >
      <p className="leading-relaxed flex-1 text-foreground/80">{review}</p>
      <div className="flex items-center pt-6 gap-x-4">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-center object-cover border border-foreground/20"
        />
        <h3 className="text-medium text-foreground">{name}</h3>
      </div>
    </li>
  );
}

import { useGetVolunteersQuery } from "@/redux/api/api";
import { Heading } from "@/components/ui/heading";
import { Volunteer } from "@/types";
import { Mail, Phone, MapPin } from "lucide-react";

export function AboutUs() {
  const { data: volunteers, isLoading } = useGetVolunteersQuery("");

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="max-w-7xl container mx-auto px-4">
      <Heading className="text-center">Our Volunteers</Heading>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {volunteers?.map(
          ({
            _id,
            name,
            email,
            phone,
            image,
            location,
            objective,
          }: Volunteer) => (
            <li
              key={_id}
              className="bg-secondary rounded-md shadow-md border border-foreground/10"
            >
              <img
                className="max-h-[14rem] sm:max-h-[16rem] rounded-md w-full object-top object-cover"
                src={image}
                alt={name}
              />
              <div className="p-4 md:p-6">
                <h3 className="font-medium text-lg">{name}</h3>
                <p className="leading-relaxed">{objective}</p>
                <div className="pt-4 flex flex-col gap-1">
                  <div className="flex items-center gap-x-2">
                    <Mail className="w-4 h-4 text-foreground/80" />
                    <span>{email}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <Phone className="w-4 h-4 text-foreground/80" />
                    <span>{phone}</span>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <MapPin className="w-4 h-4 text-foreground/80" />
                    <span>{location}</span>
                  </div>
                </div>
              </div>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

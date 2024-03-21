import { Heading } from "@/components/ui/heading";
import { topDonors } from "@/config";
import { HandCoins } from "lucide-react";

export function Leaderboard() {
  return (
    <section className="max-w-7xl container mx-auto px-4">
      <Heading className="text-center">Donation Leaderboard</Heading>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {topDonors.map(({ image, name, amount, quote }) => (
          <li
            key={name}
            className="bg-secondary border rounded-md shadow-md border-foreground/10"
          >
            <img
              className="w-full max-h-[14rem] sm:max-h-[18rem] rounded-md object-top object-cover"
              src={image}
              alt={name}
            />
            <div className="px-3 py-2 sm:p-4 space-y-2">
              <p className=" italic">{quote}</p>
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{name}</h3>
                <div className="flex gap-x-2 items-center">
                  <HandCoins className="w-4 h-4 text-primary" />
                  <span className="font-medium">{amount}</span>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

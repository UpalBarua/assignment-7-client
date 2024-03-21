import { DonationPost } from "@/types";
import { Bookmark, HandCoins } from "lucide-react";
import { Link } from "react-router-dom";
import { buttonVariants } from "./ui/button";

export function DonationCard({
  image,
  title,
  category,
  description,
  amount,
  _id,
}: DonationPost) {
  return (
    <div className="bg-secondary rounded-md shadow-md border border-foreground/10">
      <img
        src={image}
        alt={title}
        className="w-full h-[16rem] rounded-md object-center object-cover"
      />
      <div className="p-4 flex flex-col justify-between min-h-[16rem]">
        <div className="space-y-2 flex-1">
          <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
          <div className="flex gap-x-4 text-foreground/80">
            <div className="flex gap-x-2 items-center">
              <HandCoins className="w-4 h-4 text-primary" />
              <span>{amount}</span>
            </div>
            <div className="flex gap-x-2 items-center">
              <Bookmark className="w-4 h-4 text-primary" />
              <span>{category}</span>
            </div>
          </div>
          <p className="leading-relaxed text-foreground/80">{description}</p>
        </div>
        <Link
          to={`/donations/${_id}`}
          className={buttonVariants({
            size: "sm",
          })}
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

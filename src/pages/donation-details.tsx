import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DonationPost } from "@/types";
import { Bookmark, HandCoins } from "lucide-react";
import { Link, useLoaderData } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { userCurrentUser } from "@/redux/features/auth/authSlice";

export function DonationDetails() {
  const data = useLoaderData() as DonationPost;
  const user = useAppSelector(userCurrentUser) as { email: string };

  const { image, title, amount, category, description } = data;

  return (
    <section className="container max-w-5xl mx-auto px-4">
      <div>
        <img
          src={image}
          alt={title}
          className="w-full h-[16rem] rounded-md object-center object-cover"
        />
        <div className="p-4 gap-6 flex flex-col items-start">
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
          <Dialog>
            <DialogTrigger asChild>
              <Button>Donate Now</Button>
            </DialogTrigger>
            <DialogContent className="flex border-foreground/10 flex-col items-center justify-center">
              <p className="text-center">{user?.email}</p>
              <p className="text-center">
                Donate <strong>{amount}</strong> to <strong>{title}</strong>
              </p>
              <Link
                to="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  className: "mt-2",
                })}
              >
                Confirm Donation
              </Link>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}

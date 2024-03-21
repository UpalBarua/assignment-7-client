import { donationCategories } from "@/config";

export type DonationPost = {
  _id?: string;
  title: string;
  image: string;
  category: (typeof donationCategories)[number];
  description: string;
  amount: string;
};

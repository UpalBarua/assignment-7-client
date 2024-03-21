import { donationCategories } from "@/config";

export type DonationPost = {
  _id?: string;
  title: string;
  image: string;
  category: (typeof donationCategories)[number];
  description: string;
  amount: string;
};

export type Comment = {
  _id?: string;
  name: string;
  comment: string;
  postDate: string;
};

export type Testimonial = {
  _id?: string;
  name: string;
  image: string;
  review: string;
};

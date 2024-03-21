import {
  Ambulance,
  CookingPot,
  Facebook,
  Instagram,
  Map,
  Target,
  Twitter,
} from "lucide-react";

export const offerings = [
  {
    Icon: Ambulance,
    title: "Emergency Relief",
    content:
      "Providing immediate assistance to disaster-stricken areas by delivering medical aid, food, shelter, and essential supplies to those affected, offering crucial support during times of crisis and helping communities rebuild and recover.",
  },
  {
    Icon: CookingPot,
    title: "Nutritional Support",
    content:
      "Ensuring access to nutritious meals for vulnerable populations, especially children and the elderly, to promote better health and well-being in communities, addressing food insecurity and malnutrition through sustainable solutions.",
  },
  {
    Icon: Map,
    title: "Educational Initiatives",
    content:
      "Supporting educational programs, including scholarships, school supplies distribution, teacher training, and infrastructure development, to improve access to quality education in underserved areas, empowering individuals and fostering lifelong learning.",
  },
  {
    Icon: Target,
    title: "Career Development",
    content:
      "Empowering individuals through skill-building workshops, vocational training, job placement assistance, and entrepreneurship support, fostering economic stability and growth within communities, and creating pathways to sustainable livelihoods and financial independence.",
  },
] as const;

export const brands = [
  "/brands/google.svg",
  "/brands/coca_cola.svg",
  "/brands/ford.svg",
  "/brands/walmart.svg",
  "/brands/kelloggs.svg",
  "/brands/nivea.svg",
] as const;

export const socialLinks = [
  {
    Icon: Facebook,
    link: "facebook.com",
  },
  {
    Icon: Twitter,
    link: "twitter.com",
  },
  {
    Icon: Instagram,
    link: "instagram.com",
  },
] as const;

export const donationCategories = [
  "Education",
  "Housing",
  "Food",
  "Healthcare",
] as const;

export const topDonors = [
  {
    name: "John Doe",
    amount: "$7500",
    quote: "Together, we can make a difference.",
    image: "https://source.unsplash.com/random/401x400?man",
  },
  {
    name: "Jane Smith",
    amount: "$6000",
    quote: "Every little bit helps!",
    image: "https://source.unsplash.com/random/402x400?woman",
  },
  {
    name: "David Johnson",
    amount: "$8000",
    quote: "Grateful for the opportunity to give back.",
    image: "https://source.unsplash.com/random/403x400?man",
  },
  {
    name: "Emily Davis",
    amount: "$7000",
    quote: "Let's support each other in times of need.",
    image: "https://source.unsplash.com/random/404x400?woman",
  },
  {
    name: "Michael Brown",
    amount: "$9000",
    quote: "Small acts, when multiplied by millions, can transform the world.",
    image: "https://source.unsplash.com/random/405x400?man",
  },
  {
    name: "Sophia Miller",
    amount: "$8500",
    quote:
      "Giving is not just about making a donation, it's about making a difference.",
    image: "https://source.unsplash.com/random/406x400?woman",
  },
];

export const navLinks = [
  { link: "/donations", label: "All donations" },
  { link: "/leaderboard", label: "Leaderboard" },
  { link: "/community", label: "Community" },
  { link: "/testimonials", label: "Testimonials" },
  { link: "/volunteers", label: "Volunteers" },
  { link: "/about-us", label: "About Us" },
] as const;

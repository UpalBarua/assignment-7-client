import { Ambulance, CookingPot, Map, Target } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

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

export const testimonials = [
  {
    name: "John Doe",
    image: "https://source.unsplash.com/random/400x400?man",
    review:
      "This platform is fantastic for donations. I appreciate the effort put into it. There's a wide range of people involved, all dedicated to making a difference.",
  },
  {
    name: "Jane Smith",
    image: "https://source.unsplash.com/random/401x401?woman",
    review:
      "I'm impressed by this donation platform. It's a great initiative, and it's heartwarming to see so many people actively involved in making a difference.",
  },
  {
    name: "Emily Johnson",
    image: "https://source.unsplash.com/random/402x402?female",
    review:
      "I'm grateful for this platform, which offers a seamless way to contribute to those in need. The dedication of everyone involved is truly commendable.",
  },
  {
    name: "Michael Brown",
    image: "https://source.unsplash.com/random/403x403?man",
    review:
      "This platform is making a significant impact with its donation efforts. It's heartening to see so many people come together for a common cause.",
  },
  {
    name: "Sophia Miller",
    image: "https://source.unsplash.com/random/404x404?woman",
    review:
      "I'm proud to support this donation platform. It's inspiring to witness the dedication and hard work of everyone involved in making a difference.",
  },
  {
    name: "William Taylor",
    image: "https://source.unsplash.com/random/405x405?man",
    review:
      "I'm amazed by the positive impact this platform has. It's heartwarming to see so many people come together for such a noble cause.",
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

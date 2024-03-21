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
] as const;

export const gratitudeMessages = [
  {
    name: "Alice Johnson",
    comment:
      "Thank you to everyone who has contributed. Your generosity is truly appreciated!",
    postDate: "2024-03-21T13:30:00.000Z",
  },
  {
    name: "Bob Smith",
    comment:
      "Feeling blessed to be a part of such a supportive community. Thank you for all your help!",
    postDate: "2024-03-21T13:30:00.000Z",
  },
  {
    name: "Eva Martinez",
    comment:
      "Grateful for the kindness and compassion shown by everyone during these challenging times.",
    postDate: "2024-03-21T13:30:00.000Z",
  },
  {
    name: "Max Brown",
    comment:
      "A big thank you to all the volunteers for their hard work and dedication!",
    postDate: "2024-03-21T13:30:00.000Z",
  },
  {
    name: "Lily Clark",
    comment:
      "Thank you for your support and encouragement. It means the world to me!",
    postDate: "2024-03-21T13:30:00.000Z",
  },
  {
    name: "Olivia Lee",
    comment:
      "Heartfelt thanks to everyone who has reached out with their support and love. We're in this together!",
    postDate: "2024-03-21T13:30:00.000Z",
  },
] as const;

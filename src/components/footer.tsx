import { HandHeart } from "lucide-react";
import { Link } from "react-router-dom";
import { socialLinks } from "@/config";
import { useInView } from "react-intersection-observer";
import { m } from "framer-motion";

export function Footer() {
  const { ref, inView } = useInView();

  return (
    <m.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.75, delay: 0.125 }}
      ref={ref}
      className="max-w-7xl mt-[min(25dvw,_8rem)] container gap-4 px-4 mx-auto sm:flex-row sm:justify-between border-t border-foreground/10 flex flex-col items-center justify-center text-center py-8"
    >
      <div className="space-y-1 flex flex-col items-center justify-center sm:items-start">
        <Link
          to="/"
          className="flex text-foreground items-center gap-x-2 text-lg"
        >
          <HandHeart className="text-xl text-primary" />
          <span className="font-medium tracking-tight">HopeSync</span>
        </Link>
        <p className="text-foreground/60 leading-relaxed text-sm">
          Copyright © 2024 hopesync.com
        </p>
      </div>
      <div className="flex items-center gap-x-4">
        {socialLinks.map(({ Icon, link }) => (
          <a
            key={link}
            href={link}
            className="flex items-center justify-center w-10 h-10 bg-secondary rounded-full border border-foreground/10"
          >
            <Icon size={18} />
          </a>
        ))}
      </div>
    </m.footer>
  );
}

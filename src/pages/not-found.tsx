import { Link } from "react-router-dom";
import { buttonVariants } from "@/components/ui/button";

export function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-6">
      <p className="text-6xl font-medium text-red-500">404 Not Found!</p>
      <Link to="/" className={buttonVariants({})}>
        Go Home
      </Link>
    </section>
  );
}

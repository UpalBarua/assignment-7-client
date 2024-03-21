import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  HandCoins,
  HandHeart,
  Home,
  Menu,
  MessageSquareText,
  PackagePlus,
} from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="relative min-h-screen dark:bg-background dark:text-foreground/90">
      <div className="flex md:hidden items-center px-4 py-4 sm:py-6 container max-w-7xl mx-auto gap-x-4">
        <Button
          size="icon"
          variant="outline"
          className="md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu />
        </Button>
        <Link
          to="/"
          className="flex text-foreground items-center gap-x-2 text-lg"
        >
          <HandHeart className="text-xl text-primary" />
          <span className="font-medium tracking-tight">HopeSync</span>
        </Link>
      </div>
      <aside
        className={cn(
          "fixed -translate-x-full z-10 transition-transform duration-500 inset-0 h-full w-full bg-background/50 md:w-[22rem] md:-translate-x-0",
          {
            "-translate-x-0": isSidebarOpen,
          },
        )}
        onClick={() => setIsSidebarOpen(false)}
      >
        <nav className="bg-secondary space-y-1 w-[80%] h-full py-8 border-r md:w-full md:space-y-2 border-foreground/10 shadow-md">
          <Link
            to="/"
            className="px-4 py-2 md:px-6 mb-4 hidden md:flex text-foreground items-center gap-x-2 text-lg"
          >
            <HandHeart className="text-xl text-primary" />
            <span className="font-medium tracking-tight">HopeSync</span>
          </Link>
          <Link
            to="/dashboard"
            className="flex px-4 md:px-6 py-2 items-center gap-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/dashboard/donations"
            className="flex md:px-6 px-4 py-2 items-center gap-x-2"
          >
            <HandCoins className="h-5 w-5" />
            <span>Manage Donations</span>
          </Link>
          <Link
            to="/dashboard/create-donation"
            className="flex md:px-6 px-4 py-2 items-center gap-x-2"
          >
            <PackagePlus className="h-5 w-5" />
            <span>Create Donation</span>
          </Link>
          <Link
            to="/dashboard/create-testimonial"
            className="flex md:px-6 px-4 py-2 items-center gap-x-2"
          >
            <MessageSquareText className="h-5 w-5" />
            <span>Create Testimonial</span>
          </Link>
        </nav>
      </aside>
      <section className="md:absolute inset-0 md:left-[calc(22rem)] md:px-8 md:py-10 py-4 px-4">
        <Outlet />
      </section>
    </main>
  );
}

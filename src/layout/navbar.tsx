import { ThemeToggle } from "@/components/theme-toggle";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { logOut, userCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { m } from "framer-motion";
import { navLinks } from "@/config";
import { HandHeart, Menu } from "lucide-react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const token = useAppSelector(userCurrentToken);

  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <m.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex items-center justify-between flex-wrap px-4 py-4 sm:py-6 container max-w-7xl mx-auto"
    >
      <Link
        to="/"
        className="flex dark:text-foreground items-center gap-x-2 text-lg"
      >
        <HandHeart className="text-xl text-primary" />
        <span className="font-bold tracking-tight">HopeSync</span>
      </Link>
      <button className="text-xl md:hidden outline-none" onClick={toggleMenu}>
        <Menu />
      </button>
      <div
        id="navbar-default"
        className={cn(
          "bg-secondary w-full p-6 md:p-0 md:mt-0 md:gap-1 border border-foreground/10 mt-6 hidden flex-col gap-4 dark:shadow-md rounded-lg md:border-0 md:flex md:bg-transparent md:flex-row md:w-max",
          {
            flex: isMenuOpen,
          },
        )}
      >
        {navLinks.map(({ link, label }) => (
          <Link
            key={link}
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            to={link}
          >
            {label}
          </Link>
        ))}
        {!token ? (
          <Link
            className={buttonVariants({ variant: "ghost", size: "sm" })}
            to="/login"
          >
            Login
          </Link>
        ) : (
          <Fragment>
            <Link
              to="/dashboard"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
            >
              Dashboard
            </Link>
            <Button
              size="sm"
              className="text-red-500"
              variant="ghost"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Fragment>
        )}
        <ThemeToggle />
      </div>
    </m.nav>
  );
}

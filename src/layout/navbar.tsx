import { cn } from "@/lib/utils";
import { logOut, userCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { HandHeart, Menu } from "lucide-react";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";

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
        className="flex text-foreground items-center gap-x-2 text-lg"
      >
        <HandHeart className="text-xl text-primary" />
        <span className="font-medium tracking-tight">HopeSync</span>
      </Link>
      <button className="text-xl sm:hidden outline-none" onClick={toggleMenu}>
        <Menu />
      </button>
      <div
        id="navbar-default"
        className={cn(
          "bg-secondary w-full p-6 sm:p-0 sm:mt-0 sm:gap-8 border border-foreground/10 mt-6 hidden flex-col gap-4 shadow-md rounded-lg sm:border-0 sm:flex sm:bg-transparent sm:flex-row sm:w-max",
          {
            flex: isMenuOpen,
          },
        )}
      >
        {/* <Link to="/">Home</Link> */}
        <Link to="/donations">All donations</Link>
        <Link to="/leaderboard">Leaderboard</Link>
        <Link to="/community">Community</Link>
        <Link to="/testimonials">Testimonials</Link>
        <Link to="/volunteers">Volunteers</Link>
        <Link to="/about-us">About Us</Link>
        {!token ? (
          <Link to="/login">Login</Link>
        ) : (
          <Fragment>
            <Link to="/dashboard">Dashboard</Link>
            <button className="w-max text-red-500" onClick={handleLogout}>
              Logout
            </button>
          </Fragment>
        )}
      </div>
    </m.nav>
  );
}

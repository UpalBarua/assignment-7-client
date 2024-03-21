import { Footer } from "@/components/footer";
import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";

export function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">
        <Navbar />
        <Outlet />
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

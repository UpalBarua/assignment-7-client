import { CreateTestimonial } from "@/admin/create-testimonial";
import { Dashboard } from "@/admin/dashboard";
import { DonationManagement } from "@/admin/donation-management";
import { NewDonation } from "@/admin/new-donation";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { MainLayout } from "@/layout/main-layout";
import { RouteGuard } from "@/layout/protectedRoute";
import { AboutUs } from "@/pages/about-us";
import { Community } from "@/pages/community";
import { DonationDetails } from "@/pages/donation-details";
import { Donations } from "@/pages/donations";
import { Home } from "@/pages/home";
import { Leaderboard } from "@/pages/leaderboard";
import { Login } from "@/pages/login";
import { NotFound } from "@/pages/not-found";
import { Register } from "@/pages/register";
import { Testimonials } from "@/pages/testimonials";
import { Volunteers } from "@/pages/volunteers";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/donations",
        element: <Donations />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/volunteers",
        element: <Volunteers />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/testimonials",
        element: <Testimonials />,
      },
      {
        path: "/donations/:id",
        element: <DonationDetails />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-7-server.vercel.app/api/v1/donation/${params?.id}`,
          ),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <RouteGuard>
        <DashboardLayout />
      </RouteGuard>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "donations",
        element: <DonationManagement />,
      },
      {
        path: "create-donation",
        element: <NewDonation />,
      },
      {
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

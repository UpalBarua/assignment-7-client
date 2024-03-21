import { Dashboard } from "@/admin/dashboard";
import { DonationManagement } from "@/admin/donation-management";
import { NewDonation } from "@/admin/new-donation";
import { DashboardLayout } from "@/layout/dashboard-layout";
import { MainLayout } from "@/layout/main-layout";
import { RouteGuard } from "@/layout/protectedRoute";
import { DonationDetails } from "@/pages/donation-details";
import { Donations } from "@/pages/donations";
import { Home } from "@/pages/home";
import { Login } from "@/pages/login";
import { NotFound } from "@/pages/not-found";
import { Register } from "@/pages/register";
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
        path: "/donations/:id",
        element: <DonationDetails />,
        loader: ({ params }) =>
          fetch(
            `https://l2-b2-assignment-6-backend-upal-barua.vercel.app/api/v1/donation/${params?.id}`,
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;

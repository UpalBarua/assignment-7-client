import { RouterProvider } from "react-router-dom";
import { useAppSelector } from "./redux/hook";
import router from "./routes/routes";

export function App() {
  const isDarkMode = useAppSelector((content) => content.ui.isDarkMode);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <RouterProvider router={router} />
    </div>
  );
}

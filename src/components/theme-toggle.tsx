import { toggleMode } from "@/redux/features/ui/uiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const isDarkMode = useAppSelector((content) => content.ui.isDarkMode);
  const dispatch = useAppDispatch();

  const toggleModeHandler = () => {
    dispatch(toggleMode());
  };

  return (
    <Button
      size="icon"
      variant="secondary"
      onClick={toggleModeHandler}
      className="ml-2 mx-auto"
    >
      {isDarkMode ? <Moon /> : <Sun />}
    </Button>
  );
}
